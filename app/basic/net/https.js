import qs from 'qs';

let http_req = {
  postJson(url, data){
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
                responseText
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
  getData(url,params){
    var fetchOptions = {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            }
        };
    var result;
    const queryString=qs.stringify(params);
    url=`${url}${queryString&&"?"+queryString}`;
    console.log(url);
    fetch(url, fetchOptions)
        .then((response) => response.text())
        .then((responseText) => {
           console.log('结果为:',responseText)
           result=responseText;
           
        }).catch(e => {
            // store.dispatch({
            //   type : "NETWORK_ERROR",
            //   cache : {
            //     url,
            //     fetchOptions
            //   }
              
            // })
            throw(e);
          });
        return result;
  }
}
export default http_req;