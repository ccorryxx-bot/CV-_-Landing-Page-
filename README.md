# Interactive CV - Kyaw Swar Winn

A modern, interactive CV website with multiple customizable templates designed to showcase different career paths and professional profiles.

## Features

- **Multiple CV Templates**: Choose from 5 professionally designed templates (Classic, Minimalist, Dark Gold, Sidebar, Creative)
- **Multiple Career Profiles**: Tailor your CV for different positions (Developer, Sales & Marketing, General Purpose)
- **Editable Fields**: Directly edit your CV content in the browser with real-time updates
- **Print to PDF**: Export your CV as a PDF document with a single click
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Semantic HTML**: Built with proper HTML5 semantic elements for better accessibility and SEO
- **Accessible**: ARIA labels and keyboard navigation support for all users

## Project Structure

```
cvfrom-/
├── index.html          # Main HTML file with semantic markup and SEO meta tags
├── styles.css          # Separated CSS styles for all templates and components
├── script.js           # JavaScript logic for interactivity and template rendering
└── README.md           # This file
```

## Getting Started

### Prerequisites

No build tools or dependencies required. This is a pure HTML/CSS/JavaScript project that runs directly in the browser.

### Usage

1. Open `index.html` in your web browser
2. Click the **Dashboard** button to select your CV type (Developer, Sales, or General)
3. Choose a design template from the available options
4. Edit the content directly in the CV fields
5. Use the **PDF** button to print or export your CV

## CV Types

### Developer / Tech
Emphasizes technical skills, programming languages, and system maintenance expertise. Perfect for tech positions.

### Sales & Marketing
Highlights people skills, communication abilities, and sales expertise. Ideal for customer-facing roles.

### General Purpose
Balanced presentation of skills suitable for entry-level positions and diverse career paths.

## Templates

1. **Classic** - Professional dark header with structured layout
2. **Minimalist** - Clean white design with elegant Playfair typography
3. **Dark Gold** - Dark navy background with gold accents for premium look
4. **Sidebar** - Modern split layout with blue sidebar and skill bars
5. **Creative** - Teal-navy gradient header with bold section lines

## Customization

### Contact Information

Edit the `CONTACT` object in `script.js` to update your contact details:

```javascript
var CONTACT = {
    phone: 'your-phone',
    email: 'your-email',
    address: 'your-address',
    photo: 'your-photo-url',
    dob: 'your-date-of-birth',
    langs: 'your-languages'
};
```

### CV Content

Modify the `DATA` object in `script.js` to customize content for each CV type (cvA, cvB, cvC).

## Browser Support

- Chrome/Chromium (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Features Implemented

### Phase 1: Bug Fix
- Fixed Enter key cursor position bug in contenteditable fields
- Removed aggressive innerHTML normalization that caused cursor to jump
- Improved paste event handling for better user experience

### Phase 2: Code Organization
- Separated CSS into `styles.css` for better maintainability
- Separated JavaScript into `script.js` for cleaner code structure
- Improved code organization and readability

### Phase 3: SEO & Accessibility
- Added comprehensive meta tags for SEO (description, keywords, author, Open Graph)
- Implemented semantic HTML5 elements (header, main, section, article, footer)
- Added ARIA labels and roles for better accessibility
- Improved keyboard navigation support

## Future Enhancements

- Local storage to save CV data between sessions
- Export to multiple formats (Word, Google Docs)
- Template preview before selection
- Dark mode support
- Multi-language support
- Performance optimization (image compression, minification)

## License

This project is open source and available for personal use.

## Author

**Kyaw Swar Winn** (ကျော်စွာဝင်း)
- Email: zekyyyy2006@gmail.com
- Phone: 09-788404048
- Location: Yangon, Myanmar

## Support

For issues, suggestions, or improvements, please open an issue in the repository.

---

**Last Updated**: May 24, 2026
