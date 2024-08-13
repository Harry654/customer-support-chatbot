"use client";

import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { TReservationTicket } from "@/types";
import { convertFirebaseTimestampToDate } from "@/helpers/firebase/convertFirebaseTimestampToDate";

interface Props {
  tableData: TReservationTicket[];
}

const ReservationTable: React.FC<Props> = ({ tableData }) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Ticket ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Guests</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.length ? (
            tableData.map((row, index) => (
              <TableRow key={index}>
                <TableCell>{row.ticket_id}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell>{row.guests}</TableCell>
                <TableCell>
                  {convertFirebaseTimestampToDate(row.date)}
                </TableCell>
                <TableCell
                  color={row.status === "pending" ? "yellow" : "green"}
                >
                  {row.status}
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={6} sx={{ textAlign: "center" }}>
                You have no reservations yet
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default ReservationTable;
