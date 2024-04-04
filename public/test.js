const WebSocket = require("ws");

let isError = false;
let tradePreviousValue = null;

function getProp(object, keys, defaultVal ){
	keys = Array.isArray( keys )? keys : keys.split('.');
	object = object[keys[0]];
	if( object && keys.length>1 ){
		return getProp( object, keys.slice(1) );
	}
	return object === undefined? defaultVal : object;
}

function makeSocket() {
  console.log("Connecting to binance...");
  const ws = new WebSocket("wss://stream.binance.com/stream");

  ws.on("open", function open() {
    ws.send(
      JSON.stringify({
        method: "SUBSCRIBE",
        params: ["btcusdt@aggTrade"],
        id: 1,
      })
    );
  });

  ws.on("message", function incoming(data) {
    let json = JSON.parse(data);
    console.log("🚀 ~ incoming ~ json:", json)
    
     tradePreviousValue = parseFloat(getProp(json, 'data.p', tradePreviousValue));
     console.log(tradePreviousValue);
  });

  ws.on("close", function close() {
    console.log("Disconnected from binance");
    !isError && makeSocket();
  });

  ws.on("error", function error(error) {
    isError = true;
    console.log("On error binance", error.message);
  });
}
makeSocket();
