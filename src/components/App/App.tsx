import React from 'react';
import styles from './App.module.css';
import {useDispatch, useSelector} from "react-redux";
import {addCash, getCash} from "../../services/reducers/cashReducer";
import {addCustomer, removeCustomer} from "../../services/reducers/customerReducer";
import {fetchCustomers} from "../../services/actions/customerAction";

const App = () => {

    const store = useSelector((store: any) => store.cash)
    const dispatch = useDispatch()
    const addCashClick = () => {
        dispatch(addCash(5))
    }
    const getCashClick = () => {
        dispatch(getCash(5))
    }

    const addCustomerClick = () => {
        dispatch(addCustomer({
            name: prompt(),
            id: Date.now()
        }))
    }

    const addManyCustomerClick = () => {
        dispatch(fetchCustomers())
    }

    const customers = useSelector((store: any) => store.customers.customers)
    console.log(customers)
    return (
        <div className={styles.app}>
            <div className={styles.buttons}>
                <button
                    className={styles.button}
                    type="button"
                    onClick={addCashClick}>
                    Добавить
                </button>
                <button
                    className={styles.button}
                    type="button"
                    onClick={getCashClick}>
                    Убрать
                </button>
            </div>
            <p className={styles.text}>{store.cash}</p>
            <div className={styles.customers}>
                <div className={styles.buttons}>
                    <button
                        className={styles.button}
                        type="button"
                        onClick={addCustomerClick}>
                        Добавить клиента
                    </button>
                    <button
                        className={styles.button}
                        type="button"
                        onClick={() => addManyCustomerClick()}>
                        Получить данные
                    </button>
                </div>
                <ul className={styles.list}>
                    {customers.map((elem: any) => {
                        return (
                            <li
                                className={styles.list_item}
                                onClick={() => {
                                    dispatch(removeCustomer(elem.id))
                                }}>
                                {elem.name}
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    );
}

export default App;
