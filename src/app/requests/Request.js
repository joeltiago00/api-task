const validate = async (data) => {
    let fields = '';
    data = await Object.keys(data).map(function(value, a, key) {
        fields = key;
        return data[value];
    });
    console.log(data.toString())
}

const Request = {
    validate
}

export default Request;