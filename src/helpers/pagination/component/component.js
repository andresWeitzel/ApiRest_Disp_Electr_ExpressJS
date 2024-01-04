//Const-vars
let msgResponse;
let msgLog;

/**
 * @description checks the order by value of the query string param to assign a field value
 * @param {String} orderBy String type
 * @returns a string with the field value or null
 */
const checkOrderBy = async (orderBy) => {
  try {
    msgResponse = null;
    msgLog = null;

    if (typeof orderBy != "string") {
      return null;
    }

    switch (orderBy.toLowerCase()) {
      case "id":
        orderBy = "id";
        break;
      case "codigo":
      case "code":
        orderBy = "codigo";
        break;
      case "imagen":
      case "image":
        orderBy = "imagen";
        break;
      case "nro_pieza":
      case "nropieza":
      case "nropart":
        orderBy = "nro_pieza";
        break;
      case "categoria":
      case "category":
        orderBy = "categoria";
        break;
      case "descripcion":
      case "description":
        orderBy = "descripcion";
        break;
      case "fabricante":
      case "maker":
        orderBy = "fabricante";
        break;
      case "stock":
        orderBy = "stock";
        break;
      case "precio":
      case "price":
        orderBy = "precio";
        break;
      default:
        orderBy = null;
    }
    return orderBy;
  } catch (error) {
    msgResponse = "ERROR in checkOrderBy() helper function from component.js";
    msgLog = msgResponse + `Caused by ${error}`;
    console.log(msgLog);
    return null;
  }
};

/**
 * @description checks the order at value of the query string param to assign a field value
 * @param {String} orderAt String type
 * @returns a string with the field value or null
 */
const checkOrderAt = async (orderAt) => {
  try {
    msgResponse = null;
    msgLog = null;

    if (typeof orderAt != "string") {
      return null;
    }

    switch (orderAt.toLowerCase()) {
      case "asc":
        orderAt = "ASC";
        break;
      case "desc":
        orderAt = "DESC";
        break;
      default:
        orderAt = null;
    }
    return orderAt;
  } catch (error) {
    msgResponse = "ERROR in checkOrderAt() helper function from component.js";
    msgLog = msgResponse + `Caused by ${error}`;
    console.log(msgLog);
    return null;
  }
};

module.exports = {
  checkOrderBy,
  checkOrderAt,
};
