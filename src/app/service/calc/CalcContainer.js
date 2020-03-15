import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class CalcContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sise: 1000000,
      Money: 120000,
      Plat: 13000,
      discount: 0,
      ItemNum: 500,
      ItemPtPrice: 4500,
      sellNum: 1,
      sellGold: 7000
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: Number(e.target.value)
    });
  }

  render() {
    return (
      <div className="calc">
        <Link to="/">돌아가기</Link>
        <div>
          골드 시세 10000원 당
          <input
            type="number"
            min="1"
            name="sise"
            value={this.state.sise}
            onChange={this.handleChange}
          />
          골드
        </div>
        <div>
          Platinum 구매 가격 :
          <input
            type="number"
            min="1"
            name="Money"
            value={this.state.Money}
            onChange={this.handleChange}
          />
          원
        </div>
        <div>
          구매할인 :
          <input
            type="number"
            min="1"
            name="discount"
            value={this.state.discount}
            onChange={this.handleChange}
          />
          %
        </div>
        <div>
          Platinum 구매량 :
          <input
            type="number"
            min="1"
            name="Plat"
            value={this.state.Plat}
            onChange={this.handleChange}
          />
          pt
        </div>
        <div>
          Platinum 아이템 묶음 당 갯수:
          <input
            type="number"
            min="1"
            name="ItemNum"
            value={this.state.ItemNum}
            onChange={this.handleChange}
          />
          개
        </div>
        <div>
          Platinum 아이템 묶음 가격:
          <input
            type="number"
            min="1"
            name="ItemPtPrice"
            value={this.state.ItemPtPrice}
            onChange={this.handleChange}
          />
          pt
        </div>
        <div>
          판매할 Platinum 아이템 묶음 당 갯수 :
          <input
            type="number"
            min="1"
            name="sellNum"
            value={this.state.sellNum}
            onChange={this.handleChange}
          />
          개
        </div>
        <div>
          판매할 Platinum 아이템 묶음 당 골드 :
          <input
            type="number"
            min="1"
            name="sellGold"
            value={this.state.sellGold}
            onChange={this.handleChange}
          />
          골드 <br />
        </div>
        <div> 1 Gold 당 현금 가격 : {10000 / this.state.sise}원</div>
        <div>
          1 Platinum 당 현금 가격 :{" "}
          {(this.state.Money * (100 - this.state.discount)) /
            100 /
            this.state.Plat}{" "}
          원
        </div>
        <div>
          Platinum 아이템 1개당 플래티넘 가격 :{" "}
          {this.state.ItemPtPrice / this.state.ItemNum} pt
        </div>
        <div>
          판매할 Platinum 아이템 당 골드 :{" "}
          {this.state.sellGold / this.state.sellNum} 골드
        </div>
        <div>
          판매할 Platinum 아이템 당 골드의 가격 :{" "}
          {((this.state.sellGold / this.state.sellNum) * 10000) /
            this.state.sise}{" "}
          원
        </div>
        <div>
          판매할 Platinum 아이템 당 가격 :{" "}
          {((this.state.ItemPtPrice / this.state.ItemNum) *
            ((this.state.Money * (100 - this.state.discount)) / 100)) /
            this.state.Plat}{" "}
          원
        </div>
        <div>
          원금의{" "}
          {(((this.state.sellGold / this.state.sellNum) * 10000) /
            this.state.sise /
            (((this.state.ItemPtPrice / this.state.ItemNum) *
              ((this.state.Money * (100 - this.state.discount)) / 100)) /
              this.state.Plat)) *
            100}
          % 회수
        </div>
      </div>
    );
  }
}
