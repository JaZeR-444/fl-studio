
$directories = @(
    "src\app", "src\assets", "src\components", "src\config", "src\content", 
    "src\context", "src\data", "src\data_BACKUP_1770465098", "src\data_OLD_BACKUP", 
    "src\features", "src\hooks", "src\lib", "src\pages", "src\routes", 
    "src\services", "src\state", "src\styles", "src\test", "src\types", "src\utils"
)

$outputFile = "docs\generated\SOURCE_CODE_CONSOLIDATED.md"
$binaryExtensions = @(".png", ".jpg", ".jpeg", ".gif", ".ico", ".webp", ".pdf", ".zip", ".tar", ".gz", ".mp3", ".wav", ".woff", ".woff2", ".ttf", ".eot", ".bin", ".exe", ".dll", ".so", ".dylib")

$extensionToLang = @{
    ".js" = "javascript"
    ".ts" = "typescript"
    ".tsx" = "typescript"
    ".jsx" = "javascript"
    ".css" = "css"
    ".scss" = "scss"
    ".html" = "html"
    ".json" = "json"
    ".md" = "markdown"
    ".py" = "python"
    ".sh" = "bash"
    ".ps1" = "powershell"
    ".yml" = "yaml"
    ".yaml" = "yaml"
    ".txt" = "text"
}

# Clear or create the output file
"" | Out-File -FilePath $outputFile -Encoding utf8

foreach ($dir in $directories) {
    if (Test-Path $dir) {
        Write-Host "Processing directory: $dir"
        "# SECTION: $dir`n" | Out-File -FilePath $outputFile -Append -Encoding utf8
        
        $files = Get-ChildItem -Path $dir -Recurse -File
        foreach ($file in $files) {
            $ext = $file.Extension.ToLower()
            if ($binaryExtensions -contains $ext) {
                continue
            }
            
            $lang = $extensionToLang[$ext]
            if (-not $lang) { $lang = "" }
            
            $relativeName = $file.FullName.Replace((Get-Location).Path + "\", "")
            
            "## FILE: $relativeName`n" | Out-File -FilePath $outputFile -Append -Encoding utf8
            "``````$lang" | Out-File -FilePath $outputFile -Append -Encoding utf8
            $content = [System.IO.File]::ReadAllText($file.FullName)
            $content | Out-File -FilePath $outputFile -Append -Encoding utf8
            "`n``````n" | Out-File -FilePath $outputFile -Append -Encoding utf8
        }
    } else {
        Write-Warning "Directory not found: $dir"
    }
}

Write-Host "Consolidation complete. Output saved to $outputFile"
