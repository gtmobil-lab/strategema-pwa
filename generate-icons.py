#!/usr/bin/env python3
"""Generate PNG icons from SVG for PWA"""

import base64

# SVG para el icono (simple, elegante, estilo Strategema)
svg_template = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {size} {size}">
  <defs>
    <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#c9a961;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#8a7438;stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect width="{size}" height="{size}" fill="#0d0805"/>
  <circle cx="{half}" cy="{half}" r="{radius}" fill="url(#grad)"/>
  <text x="{half}" y="{text_y}" font-family="Georgia, serif" font-size="{font_size}" font-style="italic" font-weight="600" fill="#0d0805" text-anchor="middle" dominant-baseline="middle">S</text>
</svg>'''

sizes = [
    (192, "icon-192.png"),
    (512, "icon-512.png"),
]

for size, filename in sizes:
    half = size // 2
    radius = int(size * 0.35)
    font_size = int(size * 0.5)
    text_y = int(half + font_size * 0.15)
    
    svg = svg_template.format(
        size=size,
        half=half,
        radius=radius,
        font_size=font_size,
        text_y=text_y
    )
    
    # Save SVG
    svg_file = filename.replace(".png", ".svg")
    with open(svg_file, "w") as f:
        f.write(svg)
    
    print(f"✅ Generated {svg_file}")

# Generate maskable icon (simplified for iOS/Android mask)
svg_maskable = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
  <defs>
    <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#c9a961;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#8a7438;stop-opacity:1" />
    </linearGradient>
  </defs>
  <circle cx="256" cy="256" r="220" fill="url(#grad)"/>
  <text x="256" y="320" font-family="Georgia, serif" font-size="220" font-style="italic" font-weight="600" fill="#0d0805" text-anchor="middle">S</text>
</svg>'''

with open("icon-maskable.svg", "w") as f:
    f.write(svg_maskable)
print("✅ Generated icon-maskable.svg")

print("\n🎨 Icons generated! Now convert SVGs to PNGs using:")
print("   - Online: https://cloudconvert.com/ or similar")
print("   - CLI: convert icon-192.svg icon-192.png (ImageMagick)")
print("   - Or upload icons folder to Vercel and they'll work as SVG too")
