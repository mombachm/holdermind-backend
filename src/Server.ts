import app from "./App";
const PORT = process.env.PORT || 2000;

export const StockServiceURI = process.env.STOCK_SERVICE_URI || "https://holdermind-stock-service.herokuapp.com";
export const HoldermindBackendURI = process.env.HOLDERMIND_BACKEND_URI || "abc" || "https://holdermind-backend.herokuapp.com";

app.removeAllListeners();
app.listen(PORT, async () => {
  console.log("Express server listening on port " + PORT);
  // await new MockData().initMockData();
});
