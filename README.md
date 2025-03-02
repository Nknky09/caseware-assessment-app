# CasewareAssessmentApp

Technical Assessment evaluation for Caseware Software Engineer position.

## To run the App

Install all packages from dependencies

```bash
npm install
```

Run the local dev

```bash
ng serve
```

`http://localhost:4200/`

## Assessment using Angular

`http://localhost:4200/` is defaulted to load the Angular App with requested directions for the assessment

## Assessment using React

Recreated the app with React, wanted to keep the Angular App in place just in case.
Can be accessed from - `http://localhost:4200/react`

## Instructions of Requirements for the Assessment

Objective: The goal of this assessment is to evaluate your Angular skills, including component-based architecture, services, routing, and basic API integration.
Duration: 2-3 Hours

1. Project Setup (10 points)

Create a new Angular project using Angular CLI (ng new product-app).
Set up a clean folder structure following best practices.
Initialize a Git repository and make an initial commit. 2. Component & Data Binding (30 points)

Create a ProductCardComponent that displays product details (name, price, description).
Accept a product object via @Input().
Add a button that emits an event (@Output()) when clicked. 3. Service & Data Handling (30 points)

Create a ProductService that provides product data (hardcoded or from a mock JSON file).
Fetch and display products in a ProductListComponent.
Use Observable (RxJS) in ProductService for asynchronous data fetching. 4. Routing & Navigation (30 points)
Set up Angular routing with the following paths:
/products → Displays ProductListComponent.
/products/:id → Displays ProductDetailComponent.
Clicking a product in ProductListComponent should navigate to /products/:id and display its details.
