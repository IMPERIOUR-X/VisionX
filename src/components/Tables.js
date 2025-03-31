import theme from "../theme";
import { styled } from "@mui/material";

const tableCellsResponsiveness = {
  "@media (max-width: 1200px)": {
    fontSize: "14px",
  },

  "@media (max-width: 1024px)": {
    fontSize: "12px",
  },

  "@media (max-width: 768px)": {
    fontSize: "10px",
  },

  "@media (max-width: 480px)": {
    fontSize: "8px",
  },

  "@media (max-width: 320px)": {
    fontSize: "6px",
  },
};

const Table = styled("table")({
  backgroundColor: theme.tableBackgroundColor,
  width: "100%", // Fix table width
  maxWidth: "1457px",
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
  ...tableCellsResponsiveness,
});

const TableRowCell = styled("td")({
  color: theme.primaryTextColor,
  padding: "16px 23px",
  fontSize: "16px",
  fontWeight: "400",
  fontFamily: "Ubuntu",
  textAlign: "left", // Align text properly
  ...tableCellsResponsiveness,
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
