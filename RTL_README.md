# RTL (Right-to-Left) Support

This application now supports RTL (Right-to-Left) languages, including Arabic (العربية).

## Features

- **Arabic Language Support**: Full Arabic translations for common, app, and tools sections
- **Automatic RTL Detection**: Automatically detects RTL languages and applies appropriate styling
- **RTL CSS Utilities**: Comprehensive CSS utilities for RTL layouts
- **Tailwind RTL Support**: Custom Tailwind utilities for RTL-specific styling
- **Language Switcher**: Easy language switching with RTL indicators

## Supported RTL Languages

Currently supported RTL languages:
- Arabic (العربية) - `ar`

## Implementation Details

### 1. RTL Detection

The application automatically detects RTL languages using the `useRtl` hook:

```typescript
import { useRtl } from '@/hooks/use-rtl'

const { isRtl, direction, tailwindDirection, locale } = useRtl()
```

### 2. RTL Utilities

Utility functions for RTL support:

```typescript
import { isRtl, getTextDirection, getHtmlDir } from '@/utils/rtl'

// Check if a locale is RTL
const isRtlLanguage = isRtl('ar') // true

// Get text direction
const dir = getTextDirection('ar') // 'rtl'

// Get HTML dir attribute
const htmlDir = getHtmlDir('ar') // 'rtl'
```

### 3. CSS Classes

The application automatically applies RTL-specific CSS classes:

- `[dir="rtl"]` - Applied to HTML element for RTL languages
- `.rtl` - Tailwind utility class for RTL direction
- `.ltr` - Tailwind utility class for LTR direction

### 4. RTL-Specific Styling

CSS automatically handles:
- Text alignment (right-aligned for RTL)
- Margins and padding (swapped for RTL)
- Border radius (swapped for RTL)
- Flexbox and grid layouts
- Spacing utilities

## Usage

### Adding RTL Support to Components

```typescript
import { useRtl } from '@/hooks/use-rtl'

const MyComponent = () => {
  const { isRtl, direction } = useRtl()
  
  return (
    <div className={`text-${isRtl ? 'right' : 'left'}`}>
      {isRtl ? 'النص العربي' : 'English Text'}
    </div>
  )
}
```

### Conditional RTL Styling

```typescript
// Use conditional classes
<div className={`${isRtl ? 'mr-4' : 'ml-4'}`}>
  Content
</div>

// Or use RTL-specific utilities
<div className="rtl:mr-4 ltr:ml-4">
  Content
</div>
```

### Adding New RTL Languages

To add support for additional RTL languages:

1. Add the language code to `RTL_LANGUAGES` in `utils/rtl.ts`
2. Create language files in `i18n/lang/`
3. Update `i18n/index.ts` to include the new locale
4. Update `i18n/i18next-config.ts` to import and configure the new language

## Language Files

### Arabic Translations

- `i18n/lang/common.ar.ts` - Common UI elements
- `i18n/lang/app.ar.ts` - Application-specific text
- `i18n/lang/tools.ar.ts` - Tools and functionality text

## Browser Support

RTL support works in all modern browsers that support:
- CSS `direction` property
- CSS attribute selectors
- CSS logical properties

## Testing RTL

To test RTL functionality:

1. Select Arabic from the language switcher in the header
2. Verify that text is right-aligned
3. Check that margins, padding, and borders are properly flipped
4. Ensure that icons and layouts adapt to RTL direction

## Performance

RTL support adds minimal overhead:
- CSS utilities are generated at build time
- RTL detection is memoized in React hooks
- No runtime CSS generation

## Contributing

When adding new features, consider RTL support:
- Use logical properties when possible
- Test with both LTR and RTL languages
- Ensure proper text flow and layout adaptation
- Consider cultural differences in UI design
