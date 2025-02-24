import theme from "../theme";
import { styled } from "@mui/material";

const Table = styled("table")({
  backgroundColor: theme.tableBackgroundColor,
  width: "100%", // Fix table width
  borderRadius: "18px",
  padding: "20px",
  overflow: "hidden",
  columnGap: "40px",
});

const TableRow = styled("tr")({
  backgroundColor: theme.tableRowBackgroundColor,
  borderRadius: "8px",
});

const TableHead = styled("thead")({});

const TableBody = styled("tbody")({});

const TableHeadRow = styled(TableRow)({
  backgroundColor: theme.themedBackground,
});

const TableHeadCell = styled("th")({
  color: theme.overallBackground,
  textAlign: "left", // Align text properly
  padding: "16px 23px",
  fontSize: "16px",
  fontWeight: "900",
  fontFamily: "Ubuntu",
});

const TableRowCell = styled("td")({
  color: theme.primaryTextColor,
  padding: "16px 23px",
  fontSize: "16px",
  fontWeight: "400",
  fontFamily: "Ubuntu",
  textAlign: "left", // Align text properly
});

export {
  Table,
  TableHead,
  TableBody,
  TableHeadRow,
  TableRow,
  TableHeadCell,
  TableRowCell,
};
