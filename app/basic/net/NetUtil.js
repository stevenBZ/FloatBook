let NetUtil = {
  postJson(url, data, callback){
        var fetchOptions = {
          method: 'POST',
          headers: {
            'Content-Type': 'multipart/form-data',
            },
          body:data
        };

        fetch(url, fetchOptions)
        .then((response) => response.text())
        .then((responseText) => {
          // callback(JSON.parse(responseText));
           callback(responseText);
        }).done();
  },
  getData(url,callback){
    var fetchOptions = {
          method: 'GET',
          headers: {
            'Content-Type': 'multipart/form-data',
            }
        };
    fetch(url, fetchOptions)
        .then((response) => response.text())
        .then((responseText) => {
          // callback(JSON.parse(responseText));
           callback(responseText);
        }).done();
  }
}
export default NetUtil;