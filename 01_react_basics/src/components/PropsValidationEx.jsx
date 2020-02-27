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
              <td>{props.array}</td>
              <td>{props.array === propTypes.array ? 'True' : 'False'}</td>
            </tr>
            <tr>
              <td>Boolean</td>
              <td>{props.boolean}</td>
              <td>
                {props.boolean.propTypes === propTypes.bool ? 'True' : 'False'}
              </td>
            </tr>
            <tr>
              <td>Function</td>
              <td>{props.function}</td>
              <td>
                {props.function.propTypes === propTypes.func ? 'True' : 'False'}
              </td>
            </tr>
            <tr>
              <td>String</td>
              <td>{props.string}</td>
              <td>
                {props.string.propTypes === propTypes.string ? 'True' : 'False'}
              </td>
            </tr>
            <tr>
              <td>Number</td> <td>{props.number}</td>
              <td>
                {props.number.propTypes === propTypes.number ? 'True' : 'False'}
              </td>
            </tr>
          </tbody>
          <tfoot></tfoot>
        </table>
      }
    </div>
  );
}
