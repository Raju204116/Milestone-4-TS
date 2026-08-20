/* 
✅✅✅Recommended Solving Strategy
For every problem, follow this sequence:

✅Step 1 — Understand the Input
    Ask: What exactly does my function receive?
    function calculateCartTotal(products: Product[]): number


✅Step 2 — Define the Data Types
    If objects are involved, define their structure first.
    type Product = {
        name: string;
        price: number;
    };

✅Step 3 — Define the Function
    Clearly specify the parameter types and the return type.
    function calculateCartTotal(products: Product[]): number {
        // solution
    }

✅Step 4 — Solve the JavaScript Logic
    Don't overthink TypeScript. First determine the algorithm:
    products
    -> take each price
    -> add them
    -> return total

✅Step 5 — Use TypeScript to Make the Solution Safer
    Can this value have multiple types?
    Are there only a few valid values?
    Can a property be missing?
    What exactly should the function return?


✅Step 6 — Test Edge Cases
    Don't only test the provided examples.Test extra cases too.

    For example:
    calculateCartTotal([]);
    
    findProducts(products, "tablet");
    getTicketPrice(5);
    getTicketPrice(12);
    getTicketPrice(13);


*/