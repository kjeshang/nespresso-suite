# NespressoSuite

> [Click Here](https://nespresso-suite.netlify.app/) to see Live Version.

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.0.0.

## Packages

Below are a list of software packages that helped to create this project.
* Tailwind CSS
* Angular Material
* Signal Store
* Lodash
* Currency JS

## Apps

### Dashboard
The purpose of the dashboard is to serve as landing page to navigate to different apps in the software suite.

![Dashboard Wireframe](https://raw.githubusercontent.com/kjeshang/nespresso-suite/refs/heads/main/README_Images/Dashboard.png)

### Apps in Software Suite

* Card Reconciliation
* Cash Reconciliation
* Cash Denomination Exchange (coming soon)
* Coffee Flavour Guide (coming soon)
* Machine Guide (coming soon)

### Legacy Apps & Projects

* [Legacy Cash Journal Reconciliation App](https://nespressometropoliscashjournalreconcilia.onrender.com/)
* [Coffee Flavour Reference Guides](https://github.com/kjeshang/NespressoMetropolisCoffeeFlavourReferenceGuide) - Potential to be used in Software Suite but information needs to be updated and new coffees need to be added
* [Old Machine Reference Guides](https://www.dropbox.com/home/Nespresso/Machine%20Guides) - Potential to be used in Software Suite but information needs to be updated
* [Nespresso Metropolis Training App](https://github.com/kjeshang/NespressoMetropolisTrainingApp)
* [First Aid Reference Guide](https://www.dropbox.com/scl/fi/cntqfwcxsvakmgaovhey7/First-Aid-Matrix-Guide.pdf?rlkey=fl6ni7rnis5njzug7buubalc8&e=1&dl=0) - Potential to be used in Software Suite
* [How to taste coffee in the perspective of a Coffee Specialist](https://www.dropbox.com/scl/fi/4gqd527l48fuigeybj0ws/How-to-Taste-Nespresso-Coffee.pdf?rlkey=lzxmbnr2nkfyhaz1hj8u36pox&e=1&dl=0) - Potential to be used in Software Suite
* [Nespresso Metropolis Training Matrix Summarization](https://github.com/kjeshang/NespressoMetropolisTrainingMatrixSummarization)
* [Nespresso Metropolis Customer Review Analysis](https://github.com/kjeshang/NespressoMetropolisCustomerReviewAnalysis)
* [Cash Journal Reconciliation Spreadsheet](https://www.dropbox.com/scl/fo/2euyu10rptqhfo2ano3l2/h?rlkey=vhabf8hkyx4k8bro0y7rdfmep&st=jd6a6mx4&dl=0)
* [Cash Denominiation Exchange Spreadsheet](https://www.dropbox.com/scl/fi/4c9xkzh1ohquwqd261e71/Money-Exchange.xlsx?rlkey=25mduopitkj54joxsnbaufpfs&st=qlga5j3d&dl=0) - Need to get a version that is not corrupted

### Card Reconciliation App
The purpose of this application is to perform Credit Card & Debit Card Cash Journal Reconciliation.

![Card Reconciliation App WireFrame](https://raw.githubusercontent.com/kjeshang/nespresso-suite/refs/heads/main/README_Images/CardReconciliation.png)

## Cash Reconciliation App
The purpose of this application is to perform Cash Journal Reconciliation for Physical Cash Transactions.

![Cash Reconciliation App WireFrame](https://raw.githubusercontent.com/kjeshang/nespresso-suite/refs/heads/main/README_Images/CashReconciliation.png)

## Coffee Flavour Reference App

### Data Model (Not Final)

|Name|Data Type|Description|
|--|--|--|
|ID|string|Unique identifier of coffee flavour.|
|Name|string|Name of coffee flavour.|
|Type|string|The machine the coffee flavour capsule is compatible with; i.e., Original & Vertuo.|
|Status|string|Coffee flavour is current, not current, seasonal, or limited on the menu.|
|Category|string|The menu category of the coffee flavour|
|Cup Size|string|The cup sizes that can be brewed from the coffee capsule.|
|Headline|string|The defining characteristic of the coffee flavour.|
|Intensity|number or undefined|The overall strength of the coffee flavour.|
|Price|number|The price of coffee flavour sleeve.|
|Notes|string|Aroma of the coffee flavour.|
|Taste|string|Taste of the coffee flavour.|
|Taste Profile|object: { Acidity?: number, Bitterness?: number, Roastiness?: number, Body?: number, Milky Taste?: number, Bitterness with Milk?: number, Roastiness with Milk?: number, Creamy Texture?: number } or undefined|Taste profile characteristics of the coffee flavour.|
|Description|string|Coffee flavour taste description.|
|Origin|string|Coffee flavour origin information.|
|Roasting|string|Coffee flavour roasting information.|
|Contents & Allergens|string|Coffee flavour capsule contents and allergens.|
|Ingredients|string|Coffee flavour ingredients.|
|Net Weight|string|Weight of the coffee capsules in a sleeve.|
|Unique Name|string|Unique name of coffee flavour (some names are shared for both original line and vertuo line flavours).|
|Estimated Intensity|number|Normalized intensity level of coffee flavour (some coffees that are iced or barista creations don't have an intensity level).|
|Intensity Classification|string|'Blonde', 'Medium', 'Dark'|
|Acidity Classification|string|'Low', 'Medium', 'Dark'|
|Bitterness Classification|string|'Low', 'Medium', 'Dark'|
|Roastiness Classification|string|'Low', 'Medium', 'Dark'|
|Body Classification|string|'Low', 'Medium', 'Dark'|
|Milky Taste Classification|string|'Low', 'Medium', 'Dark'|
|Bitterness with Milk Classification|string|'Low', 'Medium', 'Dark'|
|Roastiness with Milk Classification|string|'Low', 'Medium', 'Dark'|
|Creamy Texture Classification|strings|'Low', 'Medium', 'Dark'|
|Textual Info|string|Cleaned textual data that describe the coffee flavour.|
|Taste Profile Chart|string|URL of taste profile chart|
|Words Cloud Chart|string|URL of word cloud.|
|Feature Results|string|URL of feature results.|
|Capsule Image|string|URL of capsule image.|
|Sleeve Image|string|URL of sleeve image.|
|Top Recommendations|object[]: {Unique Name: string, Type: string, Headline: string, Cup Size: string, Intensity: number, Similarity Score: number}[]|Coffee flavour recommendations.|

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
