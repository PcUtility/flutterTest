function validate(res,rule, data) {
  if (rule || data === "") {
    return res.status(400).json({
      message: `all fields are required`,
    });
  }else{
    
  }
}

module.exports = {validate};
