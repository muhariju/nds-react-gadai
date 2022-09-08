import React from "react";

export function LoanTable(props) {
    return (
        <fieldset style={{ marginTop: "30px" }}>
            <table className="striped">
                <thead>
                    <tr>
                        <th>Tenor</th>
                        <th className="right-align">Pokok</th>
                        <th className="right-align">Bunga</th>
                        <th className="right-align">Total</th>
                        <th className="right-align">Total Hutang</th>
                        <th className="right-align">Sisa</th>
                    </tr>
                </thead>
                <tbody>
                    {props.list.map(item => (
                        <tr key={item.key}>
                            <td>{item.tenor}</td>
                            <td className="right-align">
                                {item.pokok.toLocaleString("en-US")}
                            </td>
                            <td className="right-align">
                                {item.bunga.toLocaleString("en-US")}
                            </td>
                            <td className="right-align">
                                {item.total.toLocaleString("en-US")}
                            </td>
                            <td className="right-align">
                                {item.totalHutang.toLocaleString("en-US")}
                            </td>
                            <td className="right-align">
                                {item.sisa.toLocaleString("en-US")}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </fieldset>
    );
}
