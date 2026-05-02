from playwright.sync_api import sync_playwright
import json
from pathlib import Path

SCREENSHOT_DIR = Path("docs/assets/screenshots")

def test_homepage():
    SCREENSHOT_DIR.mkdir(parents=True, exist_ok=True)

    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page(viewport={'width': 1920, 'height': 1080})

        print("Navigating to http://localhost:3003...")
        page.goto('http://localhost:3003')

        print("Waiting for page to load...")
        page.wait_for_load_state('networkidle')

        # Take full page screenshot
        print("Taking full-page screenshot...")
        page.screenshot(path=str(SCREENSHOT_DIR / 'homepage_fullpage.png'), full_page=True)

        # Take viewport screenshot
        print("Taking viewport screenshot...")
        page.screenshot(path=str(SCREENSHOT_DIR / 'homepage_viewport.png'))

        # Get page title
        title = page.title()
        print(f"Page title: {title}")

        # Analyze card elements
        print("\n=== Analyzing Card Elements ===")

        # Check for ResourceCard components
        resource_cards = page.locator('[class*="group"]').filter(has_text="Browse").all()
        print(f"Found {len(resource_cards)} potential ResourceCard elements")

        # Check for CompactLinkCard areas (Hero Direct Access)
        hero_access_cards = page.locator('a[href*="/hub"]').all()
        print(f"Found {len(hero_access_cards)} hero access link cards")

        # Check for stat cards
        stat_elements = page.locator('text=/\\d+\\s*(Plugins|Chains|Templates|Free)/i').all()
        print(f"Found {len(stat_elements)} stat card elements")

        # Check for font size violations (text-[10px] and text-[11px])
        print("\n=== Font Size Analysis ===")
        small_text = page.evaluate('''() => {
            const elements = document.querySelectorAll('*');
            const violations = [];
            elements.forEach(el => {
                const fontSize = window.getComputedStyle(el).fontSize;
                const sizeNum = parseFloat(fontSize);
                if (sizeNum < 12) {
                    violations.push({
                        tag: el.tagName,
                        class: el.className,
                        fontSize: fontSize,
                        text: el.textContent.substring(0, 50)
                    });
                }
            });
            return violations;
        }''')

        if small_text:
            print(f"Found {len(small_text)} elements with font-size < 12px:")
            for i, item in enumerate(small_text[:10]):  # Show first 10
                class_name = item.get('class', '')
                if isinstance(class_name, str):
                    class_short = class_name[:30] if len(class_name) > 30 else class_name
                else:
                    class_short = str(class_name)[:30]
                text_short = item.get('text', '')[:30] if item.get('text') else ''
                print(f"  {i+1}. {item.get('tag', 'unknown')}.{class_short} - {item.get('fontSize', 'N/A')} - '{text_short}'")
        else:
            print("No font-size violations found (all text >= 12px)")

        # Check for badge elements
        print("\n=== Badge Analysis ===")
        badges = page.locator('[class*="badge"], [class*="px-2"][class*="py-1"][class*="rounded"]').all()
        print(f"Found {len(badges)} badge-like elements")

        # Check for gradient elements
        print("\n=== Color/Gradient Analysis ===")
        gradients = page.locator('[class*="gradient"]').all()
        print(f"Found {len(gradients)} gradient elements")

        purple_elements = page.locator('[class*="purple"]').all()
        print(f"Found {len(purple_elements)} purple-themed elements")

        # Get console logs
        console_messages = []
        page.on("console", lambda msg: console_messages.append(f"{msg.type}: {msg.text}"))

        # Check for errors
        errors = page.evaluate('''() => {
            return window.performance.getEntriesByType('navigation').map(n => ({
                loadTime: n.loadEventEnd - n.loadEventStart,
                domContentLoaded: n.domContentLoadedEventEnd - n.domContentLoadedEventStart
            }));
        }''')

        print(f"\n=== Performance ===")
        if errors:
            print(f"Load metrics: {json.dumps(errors[0], indent=2)}")

        print("\n[OK] Screenshots saved:")
        print(f"  - {SCREENSHOT_DIR / 'homepage_fullpage.png'} (full page)")
        print(f"  - {SCREENSHOT_DIR / 'homepage_viewport.png'} (viewport)")

        browser.close()

if __name__ == '__main__':
    test_homepage()
