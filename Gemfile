source "https://rubygems.org"

# Using Jekyll 3.9, which is compatible with Cayman theme
gem "jekyll", "~> 3.9.0"
gem "liquid", "~> 4.0"  # Ensure compatibility with Jekyll 3.9

# Cayman theme for the site
gem "jekyll-theme-cayman", "~> 0.1.1"

# GitHub Pages plugin (if hosted on GitHub Pages)
gem "github-pages", group: :jekyll_plugins

# Jekyll plugins
group :jekyll_plugins do
  gem "jekyll-feed", "~> 0.12"
  gem "jekyll-remote-theme", "~> 0.4"  # Ensure remote theme functionality if needed
end

# Platform-specific gems for Windows and JRuby compatibility
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
end

# For watching directories on Windows
gem "wdm", "~> 0.1.1", platforms: [:mingw, :x64_mingw, :mswin]

# JRuby specific gem for HTTP parsing
gem "http_parser.rb", "~> 0.6.0", platforms: [:jruby]

# Additional libraries for Ruby 3.3.x+ future compatibility (as recommended by warning messages)
gem "csv"  # Required for Ruby 3.4+
gem "base64"  # Required for Ruby 3.4+
gem "bigdecimal"  # Required for Ruby 3.4+
