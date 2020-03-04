import React from 'react';
import propTypes from 'prop-types';
export default function PropsValidationEx(props) {
  return (
    <div>
      {
        <table>
          <thead>
            <th>Type</th>
            <th>Value</th>
            <th>Valid</th>
          </thead>
          <tbody>
            <tr>
              <td>Array</td>
              <td>{props.a}</td>
              <td>{propTypes.a ? 'True' : 'False'}</td>
            </tr>
            <tr>
              <td>Boolean</td>
              <td>{props.b}</td>
              <td>{props.b.bool ? 'True' : 'False'}</td>
            </tr>
            <tr>
              <td>Function</td>
              <td>{props.f}</td>
              <td>{props.f.func ? 'True' : 'False'}</td>
            </tr>
            <tr>
              <td>String</td>
              <td>{props.s}</td>
              <td>{props.string ? 'True' : 'False'}</td>
            </tr>
            <tr>
              <td>Number</td> <td>{props.n}</td>
              <td>{props.number ? 'True' : 'False'}</td>
            </tr>
          </tbody>
          <tfoot></tfoot>
        </table>
      }
    </div>
  );
}
PropsValidationEx.prop = {
  a: propTypes.array,
  b: propTypes.bool,
  f: propTypes.func,
  s: propTypes.string,
  n: propTypes.number
};
