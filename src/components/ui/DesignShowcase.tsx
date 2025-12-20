import { Badge } from './Badge';
import { GlassCard, StatCard } from './GlassCard';
import { GradientButton } from './GradientButton';

/**
 * DesignShowcase Component
 *
 * This component demonstrates all the new purple glassmorphic UI elements
 * based on the FL Studio wireframe designs. Use this as a reference for
 * implementing the new design system throughout the app.
 */
export const DesignShowcase = () => {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold text-white">
          Discover the Best <span className="text-gradient">FL Studio</span> Resources
        </h1>
        <p className="text-lg text-purple-primary-300 max-w-2xl mx-auto">
          Explore our curated collection of cutting-edge tools and techniques designed to enhance your music production workflow.
        </p>
        <div className="flex gap-3 justify-center">
          <GradientButton variant="gradient">
            Explore Tools
          </GradientButton>
          <GradientButton variant="glass">
            Learn More
          </GradientButton>
        </div>
      </div>

      {/* Stats Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <StatCard
          icon="🚀"
          value="50+"
          label="Plugins This Month"
        />
        <StatCard
          icon="👥"
          value="10K+"
          label="Active Users"
        />
        <StatCard
          icon="⭐"
          value="5K+"
          label="Community Reviews"
        />
      </div>

      {/* Badge Examples */}
      <GlassCard>
        <h3 className="text-xl font-bold text-white mb-4">Badge System</h3>
        <div className="flex flex-wrap gap-2">
          <Badge variant="purple">Purple Badge</Badge>
          <Badge variant="blue">Blue Badge</Badge>
          <Badge variant="premium">Premium</Badge>
          <Badge variant="paid">Paid</Badge>
          <Badge variant="free">Free</Badge>
        </div>
      </GlassCard>

      {/* Content Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <GlassCard>
          <div className="flex justify-between items-start mb-3">
            <div>
              <h3 className="font-bold text-white text-lg">Sytrus</h3>
              <p className="text-sm text-purple-primary-300">FL Studio Synth</p>
            </div>
            <Badge variant="premium">Native</Badge>
          </div>
          <p className="text-purple-primary-300 text-sm mb-3">
            Advanced FM synthesizer with incredible sound design capabilities.
          </p>
          <div className="flex flex-wrap gap-2">
            <Badge variant="purple">FM Synthesis</Badge>
            <Badge variant="blue">Advanced</Badge>
          </div>
        </GlassCard>

        <GlassCard>
          <div className="flex justify-between items-start mb-3">
            <div>
              <h3 className="font-bold text-white text-lg">Harmor</h3>
              <p className="text-sm text-purple-primary-300">FL Studio Synth</p>
            </div>
            <Badge variant="premium">Native</Badge>
          </div>
          <p className="text-purple-primary-300 text-sm mb-3">
            Additive/subtractive synthesizer with image synthesis.
          </p>
          <div className="flex flex-wrap gap-2">
            <Badge variant="purple">Additive</Badge>
            <Badge variant="blue">Image Synth</Badge>
          </div>
        </GlassCard>
      </div>

      {/* Typography Examples */}
      <GlassCard>
        <h3 className="text-xl font-bold text-white mb-4">Typography Styles</h3>
        <div className="space-y-2">
          <p className="text-white">White text for primary content</p>
          <p className="text-purple-primary-200">Purple 200 for highlighted text</p>
          <p className="text-purple-primary-300">Purple 300 for secondary text</p>
          <p className="text-purple-primary-400">Purple 400 for tertiary text</p>
          <p className="text-gradient text-2xl font-bold">Gradient Text Effect</p>
          <p className="glow-text text-xl">Glowing Text Effect</p>
        </div>
      </GlassCard>

      {/* Button Examples */}
      <GlassCard>
        <h3 className="text-xl font-bold text-white mb-4">Button Styles</h3>
        <div className="flex flex-wrap gap-3">
          <GradientButton variant="gradient">Gradient Button</GradientButton>
          <GradientButton variant="glass">Glass Button</GradientButton>
          <GradientButton variant="gradient" disabled>Disabled Button</GradientButton>
        </div>
      </GlassCard>
    </div>
  );
};
