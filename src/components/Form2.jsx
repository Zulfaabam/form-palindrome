/* eslint-disable react/prop-types */
import { Button, Dialog, Stack, TextField, Typography } from "@mui/material";
import { useContext, useState } from "react";
import { AppContext } from "../context";

const Form2 = ({ open, onClose }) => {
  const { state } = useContext(AppContext);

  const [data, setData] = useState(
    JSON.parse(localStorage.getItem("data")) || []
  );

  return (
    <Dialog open={open} onClose={onClose}>
      <div style={{ padding: "1rem" }}>
        <Stack gap={2}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <TextField
              value={state.submittedForm1}
              disabled
              label="Hasil dari Input"
            />
            <Button
              onClick={() => {
                if (!state.submittedForm1) return;

                const newData = [
                  ...data,
                  {
                    id: data?.length > 0 ? data[data?.length - 1]?.id + 1 : 1,
                    string: state.submittedForm1,
                    hasil: state.isSubmittedStrPalindrome
                      ? "Palindrome"
                      : "Bukan Palindrome",
                  },
                ];

                localStorage.setItem("data", JSON.stringify(newData));
                setData(newData);
              }}
              variant="contained"
            >
              Simpan
            </Button>
          </div>
          <Typography>
            Input {!state.isSubmittedStrPalindrome ? "Bukan" : ""} Merupakan
            Kalimat Palindrome
          </Typography>
          <div>
            <table className="styled-table">
              <tr>
                <th>
                  <td>ID</td>
                </th>
                <th>
                  <td>Input String</td>
                </th>
                <th>
                  <td>Hasil</td>
                </th>
                <th>
                  <td>Action</td>
                </th>
              </tr>
              <tbody>
                {data?.map((row) => (
                  <tr key={row.id}>
                    <td>{row.id}</td>
                    <td>{row.string}</td>
                    <td>{row.hasil}</td>
                    <td>
                      <Button
                        onClick={() => {
                          setData((prev) => {
                            const newData = prev?.filter(
                              (f) => f.id !== row.id
                            );

                            localStorage.setItem(
                              "data",
                              JSON.stringify(newData)
                            );

                            return newData;
                          });
                        }}
                      >
                        Delete
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Stack>
      </div>
    </Dialog>
  );
};

export default Form2;
