# TitleSafe

TitleSafe is a fullstack web application built with Next.js/TypeScript on the front end, and blockchain, AWS on the backend to store data. It enables secure and transparent recording of property titles. The app allows users to tokenize property titles into NFTs (Non-Fungible Tokens) with associated metadata. It leverages blockchain for immutable, decentralized storage of essential documents and AWS for mutable data. The app features recording of sold or bought property details and filtering titles by instrument number. It also includes a role-based access control system, allowing authorized users (like the recorder’s office) to approve titles after verifying documents and information

<a href="https://ibb.co/0rc1Cw0"><img src="https://i.ibb.co/Wf67kTr/Propertytitle.png" alt="Propertytitle" border="0"></a>

## Problem I Solved

U.S. based real estate agencies faced recurring property title fraud between buyers and sellers due to the current insecure and centralized record-keeping systems.

## Technical Approach

Built a hybrid architecture to balance security, flexibility, and compliance:

- **AWS S3** for secure, mutable document storage (like property deeds) and private user data
- **Blockchain** for immutable, verifiable signatures and transaction history
- **Role-Based Access Control** to let government officials verify and approve titles
- Filtering options for efficient title lookup

## Business Impact

MVP adopted for regional pilot testing by a U.S. government agency to secure property title records and reduce fraud.

## Technology Used:

- **Front-end**: Next.js, TypeScript
- **Back-end**: AWS S3, Blockchain (Ethereum-compatible)

## License

This project is licensed under a Proprietary License. For usage permissions, please contact the author.
