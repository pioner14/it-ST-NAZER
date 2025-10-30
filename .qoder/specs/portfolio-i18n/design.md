# Multilingual Support for Portfolio Website - Design Document

## Overview
This document outlines the implementation of internationalization (i18n) support for a Next.js portfolio website with English, French, and Russian languages. The solution will enable seamless language switching, proper SEO optimization, and maintainable translation management.

## Technical Architecture
- **Framework**: Next.js 13+ with App Router
- **Routing Strategy**: Sub-path routing (`/en/`, `/fr/`, `/ru/`)
- **Translation Management**: Local JSON files organized by language and feature
- **Language Detection**: Automatic detection with cookie persistence
- **Context Management**: React Context API for global language state
- **SEO Optimization**: hreflang tags, canonical URLs, localized metadata

## Component Design

### 1. Language Context Provider
- Manages current language state
- Provides translation functions
- Handles language switching logic
- Persists language preference in cookies

### 2. Translation Hook (`useTranslation`)
- Simplifies access to translations in components
- Supports parameterized translations
- Handles fallback languages
- Provides type safety with TypeScript

### 3. Language Switcher Component
- UI element for switching between languages
- Visual indicators for current language
- Accessible keyboard navigation
- Responsive design for mobile/desktop

### 4. Middleware (`middleware.ts`)
- Detects user's preferred language
- Redirects to appropriate language prefix
- Sets language cookie
- Handles edge cases for crawlers/bots

### 5. Route Handlers
- Dynamic routes with language parameter (`app/[lang]/page.tsx`)
- Language validation middleware
- Fallback to default language for invalid language codes

## Data Models

### Translation Files Structure
```
locales/
├── en/
│   ├── common.json      # Shared translations
│   ├── navigation.json  # Navigation-specific translations
│   ├── portfolio.json   # Portfolio project descriptions
│   └── blog.json        # Blog post translations
├── fr/
│   ├── common.json
│   ├── navigation.json
│   ├── portfolio.json
│   └── blog.json
└── ru/
    ├── common.json
    ├── navigation.json
    ├── portfolio.json
    └── blog.json
```

### Translation File Format
Each JSON file will contain key-value pairs:
```json
{
  "navigation": {
    "home": "Home",
    "about": "About",
    "portfolio": "Portfolio",
    "blog": "Blog",
    "contact": "Contact"
  },
  "hero": {
    "title": "Welcome to My Portfolio",
    "subtitle": "I'm a developer specializing in modern web applications"
  }
}
```

## API Specifications

### Client-Side Functions
- `useTranslation(namespace: string)` - Hook to access translations
- `changeLanguage(lang: string)` - Function to switch languages
- `getLocalizedUrl(url: string, lang: string)` - Generate localized URLs

### Server-Side Functions
- `getTranslations(lang: string, namespaces: string[])` - Load translations server-side
- `getLocaleFromHeaders(headers: Headers)` - Extract language from request headers

## Error Handling
- **Missing Translations**: Fallback to default language (English)
- **Invalid Language Codes**: Redirect to default language
- **Translation Loading Failures**: Graceful degradation with error boundaries
- **Cookie Issues**: Fallback to browser language detection
- **Middleware Errors**: Allow access without redirection

## Testing Strategy
1. **Unit Tests**:
   - Translation loading and fallback mechanisms
   - Language switching functionality
   - URL generation and parsing

2. **Integration Tests**:
   - Middleware language detection
   - Context provider state management
   - Component rendering with different languages

3. **End-to-End Tests**:
   - Language switching workflow
   - SEO meta tag verification
   - Content localization across pages

## Implementation Notes
- All components must consume translations through the `useTranslation` hook
- Dates, numbers, and currencies should be formatted according to locale standards
- SEO metadata must be properly localized for each language version
- The default language (English) should be used as fallback for missing translations
- Language switcher should be accessible and visible on all pages
- Consider performance implications of loading multiple translation files