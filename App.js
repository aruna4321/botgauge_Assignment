
import table_list from "./Table";
function App(){
  
  const ws = new WebSocket("ws://localhost:3000");

  const apiCall = {
    event: "bts:subscribe",
    data: { channel: "order_book_btcusd" },
  };

  ws.onopen = (event) => {
    ws.send(JSON.stringify(apiCall));
  };

  ws.onclose = () => {
    console.log("Connection Closed!");

  };
      return(
        <div>
          <table>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Address</th>
            </tr>
          {table_list.data_list.map((val, key) => {
                  return (
                      <tr key={key}>
                          <td>{val.name}</td>
                          <td>{val.age}</td>
                          <td>{val.address}</td>
                      </tr>
                  )
              })}
          </table>
        </div>
      )
      }

export default App;
