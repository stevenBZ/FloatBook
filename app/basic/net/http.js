import qs from 'qs';

let http_req = {
  postJson(url, data, callback){
        var fetchOptions = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            },
          body:JSON.stringify(data)
        };

        fetch(url, fetchOptions)
        .then((response) => response.text())
        .then((responseText) => {
          // callback(JSON.parse(responseText));
           callback(responseText);
<<<<<<< HEAD
        }).catch(e => {
            store.dispatch({
              type : "NETWORK_ERROR",
              cache : {
                url,
                fetchOptions 
              }
              
            })
=======
        })
        .catch(e => {
            // store.dispatch({
            //   type : "NETWORK_ERROR",
            //   cache : {
            //     url,
            //     fetchOptions 
            //   }
              
            // })
            console.log(e)
>>>>>>> finish functions

          });
  },
    checkToken(url, token, callback){
        var fetchOptions = {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'authorization':token
            }
        };

        fetch(url, fetchOptions)
        .then((response) => response.text())
        .then((responseText) => {
          // callback(JSON.parse(responseText));
           callback(responseText);
        }).catch(e => {
            store.dispatch({
              type : "NETWORK_ERROR",
              cache : {
                url,
                fetchOptions 
              }
              
            })

          });
  },
  getData(url,callback,params){
    var fetchOptions = {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            }
        };
    const queryString=qs.stringify(params);
    url=`${url}${queryString&&"?"+queryString}`;
    console.log(url);
    fetch(url, fetchOptions)
        .then((response) => response.text())
        .then((responseText) => {
          // callback(JSON.parse(responseText));
           callback(responseText);
        }).catch(e => {
<<<<<<< HEAD
            store.dispatch({
              type : "NETWORK_ERROR",
              cache : {
                url,
                fetchOptions
              }
              
            })
=======
            // store.dispatch({
            //   type : "NETWORK_ERROR",
            //   cache : {
            //     url,
            //     fetchOptions
            //   }
              
            // })
            throw(e);
>>>>>>> finish functions

          });
  }
}
export default http_req;