# 🔍 DETECT-DEVTOOLS
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

A lightweight, modular library for detecting when browser developer tools are opened, using multiple detection strategies.

## 🌟 Features

- **Multiple Detection Methods**: Uses various strategies to detect DevTools opening
- **Modular Architecture**: Easy to add or remove detection strategies
- **TypeScript Support**: Fully typed for better development experience
- **Customizable Callbacks**: Define custom actions when DevTools state changes
- **Minimal Dependencies**: Pure JavaScript/TypeScript implementation

## 🚀 Installation

```bash
npm install detect-devtools
```

## 📋 Usage

```javascript
import { init } from 'detect-devtools';

// Initialize with a callback function
init((isOpen, type, detail) => {
    console.log(`DevTools ${isOpen ? 'opened' : 'closed'}`);
    console.log(`Detection method: ${type}`);
    console.log(`Additional details:`, detail);
});
```

### HTML Example
Check /dist/example.html
Live example: https://vehbiu.github.io/detect-devtools/dist/example.html


## 🛠️ Detection Strategies

The library uses multiple strategies to detect DevTools:

1. **Object ID Check**: Monitors changes in object properties
2. **Performance Logging**: Analyzes console.log performance
3. **Debug Check**: Checks for debug-related behaviors
4. **ToString Check**: Evaluates function.toString() behavior

## 📁 Project Structure

```
src/
├── checks/
│   ├── impl/
│   │   └── [...checkName].ts
│   └── BaseCheck.ts
├── util/
├── index.ts
└── tsconfig.json
```

## ⚙️ API Reference

### `init(onChange?: OnChangeProps)`

Initializes the detection system with an optional callback function.

```typescript
type OnChangeProps = (
    open: boolean,    // true if DevTools is open
    type: string,     // detection method that triggered
    detail: object | string | null  // additional information
) => void;
```

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. Fork the repository
2. Create a new branch: `git checkout -b feature/your-feature`
3. Make your changes
4. Submit a pull request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

Vehbi
- GitHub: [@vehbiu](https://github.com/vehbiu)

## 🙏 Acknowledgments

- Inspired by various DevTools detection techniques
- https://github.com/sindresorhus/devtools-detect/

---
Made with ❤️ for the developer community