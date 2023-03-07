import React, { useState } from "react";
import { FaArrowCircleUp, FaArrowCircleDown } from "react-icons/fa";
import "../../../output.css";

export interface TableProps {
  data: any[];
  nItemsPerPage?: number;
  headers?: any[];
  orderingHeaders?: any[];
  tailwind?: string;
}

const Table = ({
  data,
  headers,
  orderingHeaders,
  nItemsPerPage = 5,
  tailwind,
}: TableProps) => {
  const [sortingHeader, setSortingHeader] = useState("");
  const [sortingIndex, setSortingIndex] = useState<null | number>(null);
  const [ascending, setAscending] = useState(true);
  const [filterInput, setFilterInput] = useState("");
  const [filterColumn, setFilterColumn] = useState("");
  const [filterIndex, setFilterIndex] = useState(0);

  const [pageNumber, setPageNumber] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(nItemsPerPage);

  const filteredData = filterInput.trim()
    ? data.filter((row) =>
        String(row[filterIndex])
          .toLowerCase()
          .includes(filterInput.trim().toLowerCase())
      )
    : data;

  const numberOfPages = Math.ceil(filteredData.length / itemsPerPage);
  const pagesArray = [...Array(numberOfPages).keys()];

  const sortedData =
    sortingIndex != null
      ? filteredData.sort((a, b) => {
          if (ascending) {
            return a[sortingIndex] < b[sortingIndex]
              ? -1
              : a[sortingIndex] > b[sortingIndex]
              ? 1
              : 0;
          } else {
            return a[sortingIndex] > b[sortingIndex]
              ? -1
              : a[sortingIndex] < b[sortingIndex]
              ? 1
              : 0;
          }
        })
      : filteredData;

  const page = sortedData.slice(
    (pageNumber - 1) * itemsPerPage,
    pageNumber * itemsPerPage
  );

  const sortRows = (header: string, changingSortingHeader: boolean) => {
    setSortingHeader(header);
    setSortingIndex(headers!.findIndex((item) => item === header));

    if (changingSortingHeader) {
      setAscending((value) => true);
    } else {
      setAscending((value) => !value);
    }
  };

  const filterTable = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilterInput(e.target.value);
  };

  const changeFilterColumn = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (headers) {
      setFilterIndex(
        headers?.findIndex((item) => String(item) == e.target.value)
      );
    }
  };

  return (
    <div>
      {Array.isArray(data[0]) ? (
        <>
          <div className={`border pt-4 px-4 ${tailwind}`}>
            <header className="bg-slate-200 flex justify-start p-2">
              <span className="mr-1">Search by </span>
              <select onChange={changeFilterColumn}>
                {headers?.map((header) => (
                  <option key={header} value={header}>
                    {header}
                  </option>
                ))}
              </select>
              <input
                onChange={filterTable}
                className="border flex-1 ml-1"
                type=""
              />
            </header>

            <table style={{ tableLayout: "fixed" }} className="border w-full">
              {headers && (
                <thead className="bg-gray-100">
                  <tr>
                    {headers.map((header, i) => (
                      <th className="px-2 py-1" key={i}>
                        <span className="flex items-center justify-center">
                          {header}
                          {orderingHeaders?.includes(header) && (
                            <button
                              className={`ml-2
                              ${
                                sortingHeader === header
                                  ? "text-blue-700"
                                  : "text-gray-500"
                              }
                            `}
                              onClick={() =>
                                sortingHeader === header
                                  ? sortRows(header, false)
                                  : sortRows(header, true)
                              }
                            >
                              {sortingHeader === header ? (
                                ascending ? (
                                  <FaArrowCircleUp />
                                ) : (
                                  <FaArrowCircleDown />
                                )
                              ) : (
                                <FaArrowCircleUp />
                              )}
                            </button>
                          )}
                        </span>
                      </th>
                    ))}
                  </tr>
                </thead>
              )}

              <tbody className="bg-white">
                {page.map((row: any[], i: number) => (
                  <tr key={i}>
                    {row.map((cel, j: number) => (
                      <td className="text-center" key={j}>
                        {cel}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>

            <footer className="flex justify-center py-2">
              {pagesArray.map((number) => (
                <span
                  className={`px-2 text-blue-500 cursor-pointer hover:underline ${
                    pageNumber == number + 1 &&
                    "text-gray-700 cursor-default hover:no-underline"
                  }`}
                  onClick={() => setPageNumber(number + 1)}
                  key={number}
                >
                  {number + 1}
                </span>
              ))}
            </footer>
          </div>
        </>
      ) : (
        <>
          <h1>Not array of arrays</h1>
        </>
      )}
    </div>
  );
};

export default Table;
