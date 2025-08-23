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
* Cash Denomination Exchange
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

![Card Reconciliation App Wireframe](https://raw.githubusercontent.com/kjeshang/nespresso-suite/refs/heads/main/README_Images/CardReconciliation.png)

### Cash Reconciliation App
The purpose of this application is to perform Cash Journal Reconciliation for Physical Cash Transactions.

![Cash Reconciliation App Wireframe](https://raw.githubusercontent.com/kjeshang/nespresso-suite/refs/heads/main/README_Images/CashReconciliation.png)

### Cash Denomination Exchange

The purpose of this application is to perform Cash Denomination exchange. Specifically, there are instances in the retail sector where customers may pay for their purchases using large cash denominations. However, it is necessary to have small cash denominations on hand to assist with providing change to customers. When there is an imbalance between large cash denominations & small cash denominations, it is necessary to exchange a portion of the large cash denominations with small cash denominations but is equivalent in cash value.

![Cash Exchange App Wireframe](https://raw.githubusercontent.com/kjeshang/nespresso-suite/refs/heads/main/README_Images/CashExchange.png)

### Coffee Flavour Reference App

The coffee flavour data will be retrieved from a JSON file located in the a GitHub Repository.
* Repository: [Nespresso Metropolis Coffee Flavour Reference Guide](https://github.com/kjeshang/NespressoMetropolisCoffeeFlavourReferenceGuide)
* Direct link to JSON file containing coffee data: [Coffee Data](https://github.com/kjeshang/NespressoMetropolisCoffeeFlavourReferenceGuide/blob/main/output.json)

![Coffee App Wireframe](https://raw.githubusercontent.com/kjeshang/nespresso-suite/refs/heads/main/README_Images/Coffee.png)

#### Data Model

|Name|Data Type|Description|
|--|--|--|
|id|string|Unique identifier of coffee flavour.|
|name|string|Name of coffee flavour.|
|capsuleImage|string|URL of capsule image.|
|sleeveImage|string|URL of sleeve image.|
|type|string|The machine the coffee flavour capsule is compatible with; i.e., Original & Vertuo.|
|status|string|Coffee flavour is current, not current, seasonal, or limited on the menu.|
|category|string|The menu category of the coffee flavour|
|cupSize|string|The cup sizes that can be brewed from the coffee capsule.|
|headline|string|The defining characteristic of the coffee flavour.|
|intensity|number or undefined|The overall strength of the coffee flavour.|
|price|number|The price of coffee flavour sleeve.|
|notes|string|Aroma of the coffee flavour.|
|taste|string|Taste of the coffee flavour.|
|tasteProfile|object: { acidity: number, bitterness: number, roastiness: number, body: number, milkyTaste: number, bitternessWithMilk: number, roastinessWithMilk: number, creamyTexture: number }|Taste profile characteristics of the coffee flavour.|
|description|string|Coffee flavour taste description.|
|origin|string|Coffee flavour origin information.|
|roasting|string|Coffee flavour roasting information.|
|contentsAllergens|string|Coffee flavour capsule contents and allergens.|
|ingredients|string|Coffee flavour ingredients.|
|netWeight|string|Weight of the coffee capsules in a sleeve.|
|uniqueName|string|Unique name of coffee flavour (some names are shared for both original line and vertuo line flavours).|
|estimatedIntensity|number|Normalized intensity level of coffee flavour (some coffees that are iced or barista creations don't have an intensity level).|
|intensityClassification|string|'Blonde', 'Medium', 'Dark'|
|acidityClassification|string|'Low', 'Medium', 'Dark'|
|bitternessClassification|string|'Low', 'Medium', 'Dark'|
|roastinessClassification|string|'Low', 'Medium', 'Dark'|
|bodyClassification|string|'Low', 'Medium', 'Dark'|
|milkyTasteClassification|string|'Low', 'Medium', 'Dark'|
|bitternessWithMilkClassification|string|'Low', 'Medium', 'Dark'|
|roastinesswithMilk Classification|string|'Low', 'Medium', 'Dark'|
|creamyTextureClassification|strings|'Low', 'Medium', 'Dark'|
|textualInfo|string|Cleaned textual data that describe the coffee flavour.|
|tasteProfileChart|string|URL of taste profile chart|
|wordCloudChart|string|URL of word cloud.|
|featureResults|string|URL of feature results.|
|guide|string|URL of reference guide.|
|recommendations|object[]: {uniqueName: string, type: string, headline: string, cupSize: string, intensity: number, similarityScore: number}[]|Coffee flavour recommendations.|

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
