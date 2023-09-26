import React from 'react';
import styles from './App.module.css';
import {cashSlice} from "../../Redux Toolkit/reducers/CashSlice";
import {useDispatch, useSelector} from "react-redux";
import {customerSlice, fetchCustomers} from "../../Redux Toolkit/reducers/CustomerSlice";

const App = () => {

    const dispatch = useDispatch()
    const {cash} = useSelector((state: any) => state.cash)
    const {customers} = useSelector((state: any) => state.customers)
    const {addCash, getCash}: any = cashSlice.actions
    const {addCustomer, removeCustomer}: any = customerSlice.actions
    console.log(customers)
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
            <p className={styles.text}>{cash}</p>
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
                                key={elem.id}
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
