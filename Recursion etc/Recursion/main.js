let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null,
      },
    },
  },
};
getObject(list);

function getObject(obj) {
    getProp(obj);
    	
    function getProp(o) {
        for(let prop in o) {
            if(typeof(o[prop]) === 'object') {
                getProp(o[prop]);
            } else {
                console.log('value: '+o[prop])
            }
        }
    }
}
