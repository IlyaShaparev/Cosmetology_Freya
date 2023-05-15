import React, {useState} from 'react';
import './../scss/admin.scss';


const AdminPage = () => {

    const dateOptions = {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        timezone: 'UTC'
    };

    const localeDate = new Date()

    const [isAuth, setIsAuth] = useState(false);
    const [id, setId] = useState("");
    const [email, setEmail] = useState(false);
    const [password, setPassword] = useState(false);
    const [newUser, setNewUser] = useState("");
    const [showOrders, setShowOrders] = useState(false);
    const [showAdmins, setShowAdmins] = useState(false);
    const [showForm, setShowForm] = useState(false);
    const [showFormDel, setShowFormDel] = useState(false);
    const [showFormUpd, setShowFormUpd] = useState(false);
    const [orders, setOrders] = useState([]);
    const [admins, setAdmins] = useState([]);

    const handleApi = async () => {
        fetch('http://localhost:2023/api/orders', {
            method: 'GET',
            headers: {
                Accept: 'application/json',
            },
        })
            .then((res) => res.json())
            .then((result) => setOrders(result.data));
        setShowOrders(!showOrders)
    };

    const handleApiAuth = async () => {
        fetch('http://localhost:2023/api/admin/auth', {
            method: 'POST',
            body: JSON.stringify({
                email: email,
                password: password
            }),
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
        })
            .then((res) => res.json())
            .then((result) => setIsAuth(!!!result.data));
    };

    const handleApiReg = async () => {
        await fetch('http://localhost:2023/api/admin/reg', {
            method: 'POST',
            body: JSON.stringify({
                email: email,
                password: password
            }),
            headers: {
                'Content-Type': 'application/json',
            }})
            .then((res) => res.json())
            .then((result) => setNewUser(result.data));
        setShowForm(!showForm)
        alert("Пользователь с Email: " + email + "\n Успешно добавлен!")
    }

    const handleApiAdmin = async () =>{
        fetch('http://localhost:2023/api/admin', {
            method: 'GET',
            headers: {
                Accept: 'application/json',
            },
        })
            .then((res) => res.json())
            .then((result) => setAdmins(result.data));
        setShowAdmins(!showAdmins)
    }

    const handleApiAdminDelete = async () =>{
        fetch('http://localhost:2023/api/admin/delete/:' + id, {
            method: 'DELETE',
            headers: {
                Accept: 'application/json',
            },
        })
            .then((res) => res.json())
            .then((result) => {
                if (result.status === "deleted") {
                    setShowFormDel(!showFormDel)
                }
                else {
                    alert("Какая-то ошибочка");
                }
            });

    }

    const handleApiAdminUpdate = async () =>{
        fetch('http://localhost:2023/api/admin/update/:' + id, {
            method: 'PUT',
            body: JSON.stringify({
                email: email,
                password: password
            }),
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        })
            .then((res) => res.json())
            .then((result) => {
                if (result.data === "updated") {
                    setShowFormUpd(!showFormUpd)
                }
                else {
                    alert("Какая-то ошибочка");
                }
            });
    }

    const getSort = ({ target }) => {
        const order = target.dataset.order = -(target.dataset.order || -1);
        const index = [...target.parentNode.cells].indexOf(target);
        const collator = new Intl.Collator(['en', 'ru'], { numeric: true });
        const comparator = (index, order) => (a, b) => order * collator.compare(
            a.children[index].innerHTML,
            b.children[index].innerHTML
        );

        for(const tBody of target.closest('table').tBodies)
            tBody.append(...[...tBody.rows].sort(comparator(index, order)));

        for(const cell of target.parentNode.cells)
            cell.classList.toggle('sorted', cell === target);
    };

    return (
        <div className="admin">

            <form id="first" action="" method="" hidden={isAuth}>
                <h1 className="admin__title"> Авторизуйтесь для продолжения</h1>
                <input
                    type="email"
                    className="admin__fildes"
                    placeholder="Enter your email"
                    onChange={e => setEmail(e.target.value)}
                    required/>
                <input
                    type="password"
                    className="admin__fildes"
                    placeholder="Enter your password"
                    onChange={e => setPassword(e.target.value)}
                    required/>
            </form>
            <button onClick={handleApiAuth} hidden={isAuth}> Продолжить </button>


            <div className="admin__func" hidden={!isAuth}>
                <h2>Выберете действие</h2>
                <button className="button_function" onClick={handleApi}> Показать записи </button>
                <button className="button_function" onClick={x => setShowForm(!showForm)}> Добавить администратора </button>
                <button className="button_function" onClick={handleApiAdmin}> Показать список администраторов </button>
                <button className="button_function" onClick={x => setShowFormDel(!showFormDel)}> Удалить администратора </button>
                <button className="button_function" onClick={x => setShowFormUpd(!showFormUpd)}> Изменить администратора </button>
            </div>

            <table hidden={!showOrders || !isAuth} className="table_sort">
                <caption>Таблица записей</caption>
                <thead>
                    <tr>
                        <th onClick={getSort}>Дата записи</th>
                        <th onClick={getSort}>Время записи</th>
                        <th onClick={getSort}>Услуга</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map(order =>
                        <tr>
                            <td>{order.date}</td>
                            <td>{order.time}</td>
                            <td>{order.service}</td>
                        </tr>
                    )}
                </tbody>
            </table>

            <form action="" method="" hidden={!showForm || !isAuth}>
                <h1 className="admin__title"> Внесение нового пользователя в базу </h1>
                <input
                    type="email"
                    className="admin__fildes"
                    placeholder="Enter user email"
                    onChange={e => setEmail(e.target.value)}
                    required/>
                <input
                    type="password"
                    className="admin__fildes"
                    placeholder="Enter user password"
                    onChange={e => setPassword(e.target.value)}
                    required/>
            </form>
            <button onClick={handleApiReg} hidden={!showForm || !isAuth}> Добавить </button>

            <table hidden={!showAdmins || !isAuth} className="table_sort" >
                <caption>Таблица администраторов</caption>
                <thead>
                    <tr>
                        <th onClick={getSort}>ID</th>
                        <th onClick={getSort}>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {admins.map(admin =>
                        <tr>
                            <td>{admin._id}</td>
                            <td>{admin.email}</td>
                        </tr>
                    )}
                </tbody>
            </table>

            <form action="" method="" hidden={!showFormDel || !isAuth}>
                <h1 className="admin__title"> Удаление администратора из базы </h1>
                <input
                    type="text"
                    className="admin__fildes"
                    placeholder="Enter user id"
                    onChange={e => setId(e.target.value)}
                    required/>
            </form>
            <button onClick={handleApiAdminDelete} hidden={!showFormDel || !isAuth}> Удалить </button>

            <form action="" method="" hidden={!showFormUpd || !isAuth}>
                <h1 className="admin__title"> Изменение данных администратора </h1>
                <input
                    type="id"
                    className="admin__fildes"
                    placeholder="Enter user id"
                    onChange={e => setId(e.target.value)}
                    required/>
                <h2 className="admin__title"> Новые данные администратора </h2>
                <input
                    type="email"
                    className="admin__fildes"
                    placeholder="Enter user new email"
                    onChange={e => setEmail(e.target.value)}
                    required/>
                <input
                    type="password"
                    className="admin__fildes"
                    placeholder="Enter user new password"
                    onChange={e => setPassword(e.target.value)}
                    required/>
            </form>
            <button onClick={handleApiAdminUpdate} hidden={!showFormUpd || !isAuth}> Изменить </button>

        </div>
    );
};

export default AdminPage;