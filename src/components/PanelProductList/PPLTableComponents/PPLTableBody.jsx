import React from "react";
import { PPLTableActions } from "../../../components";
export default function PPLTableBody() {
  return (
    <tbody>
      <tr>
        <td>
          <input type="checkbox" name="" id="" />
        </td>
        <td><img src="/logoRaw.png" alt="img" /></td>
        <td>Product name</td>
        <td>
          <button className="table-btn">
            <i class="fa-regular fa-file-image"></i>
          </button>
        </td>
        <td>Amir</td>
        <td>17-Jan-25</td>
        <td>Public</td>
        <td>
          <PPLTableActions />
        </td>
      </tr>
    </tbody>
  );
}
