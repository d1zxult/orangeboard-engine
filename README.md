# orangeboard-engine

**orangeboard-engine** is a web application designed to help you manage a server through a user-friendly web interface. It provides tools like a terminal, explorer, system monitoring, and process management, all accessible via a web browser.

## Features

- **Terminal**: Execute system commands directly from the web interface.
- **Explorer**: Browse, upload, and download files on the server.
- **Services Control**: Manage processes and daemons, with options directly from the web.
- **Resource Monitoring**: View real-time information on CPU, memory, and disk usage.
- **Module Support**: Add and use third-party modules to extend functionality.

## Getting Started

1. **Clone the repository**:
   git clone https://github.com/d1zxult/orangeboard-engine.git

2. **Navigate to the project folder**
   cd orangeboard-engine

3. **Install dependencies**:
   pip install -r requirements.txt

4. **Run the application**:
   python3 initialization.py

5. **Open your browser** and navigate to http://localhost:5000.

## Usage

- **Log in** using the default credentials (Username: root, Password: toor).
- **Manage your server**: Use the terminal, explore files, and etc.

## Adding Modules

To extend functionality with third-party modules:

1. Select and download the desired modules.

2. Simply drag and drop the module into the `modules` folder within project directory.

## License

This project is licensed under the MIT License. See the LICENSE.md file for more details.

## Contributing

If you'd like to contribute, please fork the repository and submit a pull request for any improvements or bug fixes.

## Acknowledgments

A special thanks to all contributors for their efforts and contributions.

## Commit Guidelines

To maintain clear commit history, use the following naming conventions:

| Type     | Description                                                      |
|----------|------------------------------------------------------------------|
| build    | Build process updates or changes to dependencies                 |
| sec      | Security fixes or vulnerability patches                          |
| ci       | CI configuration and script updates                              |
| docs     | Documentation updates                                            |
| feat     | Introduction of new features                                     |
| fix      | Bug fixes                                                        |
| perf     | Performance improvements                                         |
| refactor | Code refactoring without adding features or fixing bugs          |
| revert   | Revert to previous commits                                       |
| style    | Code style changes (e.g., formatting, missing semicolons)        |
| test     | Adding or updating tests                                         |
