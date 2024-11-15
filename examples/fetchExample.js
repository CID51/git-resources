async function test(){
    let response = awaitfetch('https://jsonplaceholder.typicode.com/todos/1');
    console.log(response);
    let json = await response.json();
    console.log(json);
}

test();