import React from "react";
import { SmallTitleHeading, TitleHeading } from "./Typograhpy";
import {
  Table,
  TableBody,
  TableHead,
  TableHeadCell,
  TableHeadRow,
  TableRow,
  TableRowCell,
} from "./Tables";
import theme from "../theme";
import { FilledButton } from "./Buttons";

// Table Head Cell Texts
const tableHeadValues = [
  "Assets",
  "Sell Price ($)",
  "Buy Price ($)",
  "Spread ($)",
  "%Change (24H)",
  "Today High ($)",
  "Today Low ($)",
];

const tableRowCellTexts = [
  [
    "Software & Tech",
    "$120.75",
    "$200.30",
    "$79.55",
    "+2.45%",
    "$220.80",
    "$110.25",
  ],
  [
    "Design & Branding",
    "$60.40",
    "$110.95",
    "$50.55",
    "-1.15%",
    "$120.65",
    "$55.10",
  ],
  [
    "Ebooks & Printables",
    "$15.20",
    "$55.75",
    "$40.55",
    "+3.05%",
    "$60.45",
    "$12.80",
  ],
  [
    "Creative & Digital Media",
    "$25.90",
    "$85.60",
    "$59.70",
    "+1.80%",
    "$95.20",
    "$20.35",
  ],
  [
    "Business & Market Tools",
    "$90.50",
    "$270.85",
    "$180.35",
    "-0.60%",
    "$280.40",
    "$85.25",
  ],
];

function AssetsAndRates(props) {
  const positiveChangeStyle = { color: "#00ff87" };
  const negativeChangeStyle = { color: "#ff4b4b" };
  const othersValueStyle = { color: theme.primaryTextColor };

  return (
    <div style={{ width: "-webkit-fill-available", margin: "120px 0 0" }}>
      <SmallTitleHeading sx={{ margin: "7px auto 0" }}>
        DDs Assets & Rates
      </SmallTitleHeading>
      <TitleHeading sx={{ margin: "7px auto 0" }}>
        Dropship Popular Assets
      </TitleHeading>
      <TitleHeading sx={{ margin: "7px auto 0" }}>Assets & Rates</TitleHeading>
      <SmallTitleHeading>Live Charts</SmallTitleHeading>

      {/* Table section */}

      <Table cellPadding={20} sx={{ margin: "20px 0 0" }}>
        {/* Table Head section */}
        <TableHead>
          <TableHeadRow>
            {tableHeadValues.map((value) => {
              return <TableHeadCell key={value}>{value}</TableHeadCell>;
            })}
          </TableHeadRow>
        </TableHead>

        {/* Table Row/Body section */}
        <TableBody>
          {tableRowCellTexts.map((Row) => {
            return (
              <TableRow>
                {Row.map((cell, cellIndex) => {
                  return (
                    <TableRowCell
                      key={cell}
                      style={
                        cellIndex === 4
                          ? cell.includes("-")
                            ? negativeChangeStyle
                            : positiveChangeStyle
                          : othersValueStyle
                      }
                    >
                      {cell}
                    </TableRowCell>
                  );
                })}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>

      <div
        style={{
          width: "fit-content",
          margin: "30px auto 0",
        }}
      >
        <FilledButton>Veiw More</FilledButton>
      </div>
    </div>
  );
}

export default AssetsAndRates;
