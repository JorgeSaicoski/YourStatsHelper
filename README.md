# YourStatsHelper
Welcome to YourStatsHelper, your go-to resource for conquering the world of statistics! Whether you're a student grappling with coursework, a researcher diving into data analysis, or anyone seeking clarity in the realm of statistics, this website is your trusted companion.

YourStatsHelper is a web application built with Angular on the frontend and NestJS on the backend. It offers a range of statistical calculations and tools to assist users in handling statistics-related tasks. Additionally, it provides user authentication and permission management.

## Features

### Statistical Calculations

#### Descriptive Statistics
- **Calculate Statistics:** Receive an array of numbers and calculate various statistical metrics, including:
  - Mean (average)
  - Standard Deviation
  - Mode
  - Range
  - Variance
  - Percentile

#### Frequency Analysis
- **Generate Frequency Table:** Create a table that calculates:
  - Absolute Frequency
  - Relative Frequency
  - Cumulative Frequency

### User Authentication and Authorization
- **User Authentication:** Secure login system to verify user identities.
- **Permission Management:** Control user access and permissions to specific features.

## Getting Started

### Prerequisites

Before you begin, ensure you have met the following requirements:
- Docker installed on your machine.

### Installation and Usage with Docker

1. Clone the repository:

   ```sh
   git clone https://github.com/JorgeSaicoski/YourStatsHelper.git
   cd YourStatsHelper
   ```

2. Build the Docker containers for the frontend (Angular) and backend (NestJS):

   ```sh
   docker-compose up --build
   ```

3. Access the application through your web browser at `http://localhost`.

4. Register for an account or log in if you already have one.

5. Explore the statistical tools and calculations provided by YourStatsHelper.

6. Use the login system to verify user identity and permissions when needed.

7. Find detailed explanations for each statistical calculation within the application.

## Contributing

Contributions are welcome! Please check the [contributing guidelines](CONTRIBUTING.md) for more information on how to get involved.

### Critical Improvements

YourStatsHelper is a growing project, and there are a few critical improvements that can greatly enhance its functionality and security:

#### Backend VIP Membership Validation

In the current version, VIP membership validation is performed in the frontend within the User Service. While this provides a convenient initial check, it's crucial to move this validation to the backend. By handling VIP checks on the backend, we ensure the utmost security and data integrity, preventing unauthorized access to VIP features.

#### Password Hashing

Security is paramount, and one critical aspect is ensuring user password protection. Currently, passwords are stored without encryption. It's essential to implement password hashing on the backend to securely store user credentials. This step enhances user data security and confidentiality.

Contributors interested in addressing these critical improvements are highly encouraged to collaborate and help fortify YourStatsHelper's functionality and security.


## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Special thanks to the Angular and NestJS communities for their great frameworks.

## Contact

If you have any questions or feedback, feel free to contact us at [jorge@sarkis.dev](mailto:jorge@sarkis.dev).
