import React, { useState } from "react";
import { FormInput } from "../FormInput";
import { LoanTable } from "../LoanTable";

export function LoanForm() {
  const [debt, setDebt] = useState("");
  const [tenor, setTenor] = useState("");
  const [interest, setInterest] = useState("");
  const [list, setList] = useState(null);

  const onDebtChange = e => setDebt(e.target.value.replaceAll(",", ""));
  const onTenorChange = e => setTenor(e.target.value.replaceAll(",", ""));
  const onInterestChange = e =>
    setInterest(e.target.value.replaceAll(",", ""));

  const debtCalculate = (debt, tenor, interest) => {
    if (debt === 0 || tenor === 0) {
      return null;
    }

    const newList = [];
    for (let i = 1; i < tenor + 1; i++) {
      const total = (debt / tenor) * (1 + interest / 100);
      const row = {
        key: "loan" + i,
        tenor: i,
        pokok: debt / tenor,
        bunga: ((debt / tenor) * interest) / 100,
        total: total,
        totalHutang: total * (tenor + 1 - i),
        sisa: total * (tenor - i)
      };
      newList.push(row);
    }

    return newList;
  };

  const onSubmit = e => {
    const newList = debtCalculate(
      Number(debt),
      Number(tenor),
      Number(interest)
    );
    setList(newList);
    e.preventDefault();
  };

  const onDelete = () => {
    setDebt("0");
    setTenor("0");
    setInterest("0");
  };

  return (
    <div className="container">
      <form onSubmit={onSubmit}>
        <FormInput
          label="debt"
          info="Nilai hutang pokok"
          type="text"
          value={debt}
          onInputChange={onDebtChange}
        />
        <FormInput
          label="tenor"
          info="Tenor"
          type="text"
          value={tenor}
          onInputChange={onTenorChange}
          unit="bulan"
        />
        <FormInput
          label="interest"
          info="Bunga"
          type="text"
          value={interest}
          onInputChange={onInterestChange}
          unit="%"
        />
        <button className="waves-effect waves-light btn" type="submit">
          Hitung
        </button>
        <button
          className="waves-effect waves-light btn"
          type="button"
          onClick={onDelete}>
          Hapus
        </button>
      </form>
      {list && list[0] && list[0].pokok ? <LoanTable list={list} /> : null}
    </div>
  );
}
