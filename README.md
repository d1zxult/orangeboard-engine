# orangeboard-core

**orangeboard-core** is a web application designed to help you manage a server through a user-friendly web interface. It provides tools like a terminal, file explorer, and real-time system monitoring, all accessible via a web browser.

## Features

- **Terminal**: Execute system commands directly from the web interface.
- **File Explorer**: Browse, upload, and download files on the server.
- **Resource Monitoring**: View real-time information on CPU, memory, and disk usage.
- **Module Support**: Add and use third-party modules to extend functionality.

## Getting Started

1. **Clone the repository**:
   git clone https://github.com/d1zxult/orangeboard-core.git
   cd dashboard-engine

2. **Install dependencies**:
   pip install -r requirements.txt

3. **Run the application**:
   python3 initialization.py

4. **Open your browser** and navigate to http://localhost:5000.

## Usage

- **Log in** using the default credentials (Username: root, Password: toor).
- **Manage your server**: Use the terminal, explore files, and monitor resources in real-time.

## Adding Modules

To extend functionality with third-party modules:

1. Clone the module repository:
   git clone https://github.com/d1zxult/orangeboard-modules.git

2. Drag and drop the selected modules into the `modules` folder within the **orangeboard-core** project.

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
