export function handlerErrol(data, id) {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var phoneformat = /(84|0[3|5|7|8|9])+([0-9]{8})\b/;

    try {
        if (data.trim() === "") throw "* Enter data";
        else {
            if (id === "erremail") {
                if (!data.match(mailformat)) throw "* Not invalid"
                else throw "";
            } else if (id === "errrepass") {
                console.log(data)
                if (data !== document.getElementById("password").value) throw "* Not equal password"

            } else if (id === "errphone") {
                if (!data.match(phoneformat)) throw "* Not invalid"
                else throw "";
            }
        }
        throw "";

    } catch (event) {
        document.getElementById(id).innerText = event;

    }
}