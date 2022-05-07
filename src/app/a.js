const obj = {
    name: "required,max,min",
    title: "required,max,min",
    email: "required,max,min"
}


Object.entries(obj).forEach((values) => {
    const key = values[0];
    const value = values[1];
    console.log( key,value);
});

const validations = [];

validations.push(
    {'input1': 'required'}, 
    {'input2': 'string'}
);
validations.forEach(item => {
    console.log(Object.keys(item).shift());
    console.log(Object.values(item).shift());
})