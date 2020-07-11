import app from "./App";
import { PostgresConnection } from "./database/PostgresConnection";
const PORT = process.env.PORT || 2000;

app.removeAllListeners();
app.listen(PORT, async () => {
  console.log("Express server listening on port " + PORT);
  // await new MockData().initMockData();
});
