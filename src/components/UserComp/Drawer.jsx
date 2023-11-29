import { Close, ExpandMore, Menu, PlusOne } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Drawer,
  Icon,
  IconButton,
  List,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

export default function DrawerComp({ accordions, setAccordions }) {
  const [openDrawer, setOpenDrawer] = useState(false);

  const [accordionTitleValue, setAccordionTitleValue] = useState("Table");

  const handleAddAccordion = () => {
    const newAccordion = {
      title: "Table",
      columns: [{ id: 1, title: "", type: "" }],
    };
    setAccordions([...accordions, newAccordion]);
  };

  const handleRemoveAccordion = (index) => {
    const updatedAccordions = [...accordions];
    updatedAccordions.splice(index, 1);
    setAccordions(updatedAccordions);
  };

  const handleAddColumn = (index) => {
    const updatedAccordions = [...accordions];
    updatedAccordions[index].columns.push({
      id: index + 1,
      title: "",
      type: "",
    });
    setAccordions(updatedAccordions);
  };

  const handleRemoveColumn = (accIndex, colIndex) => {
    const updatedAccordions = [...accordions];
    updatedAccordions[accIndex].columns.splice(colIndex, 1);
    setAccordions(updatedAccordions);
  };

  return (
    <React.Fragment>
      <Box sx={{ display: "flex", gap: "0px", width: "100%" }}>
        <Box
          sx={{
            display: openDrawer ? "block" : "none",
            background: "white",
            width: "100%",
            transition: "all 0.4s linear",
            boxShadow:
              "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
            p: 2,
          }}
        >
          {/* <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography>Tables</Typography>
            <Button
              variant="contained"
              onClick={handleCreateTable}
              color="success"
              startIcon={<PlusOne />}
            >
              Create Table
            </Button>
          </Box>

          {tables.map((table, index) => (
            <Accordion key={index} sx={{ mt: 2 }}>
              <AccordionSummary
                expandIcon={<ExpandMore />}
                aria-controls={`panel-content-${index}`}
                id={`panel-header-${index}`}
              >
                <input
                  type="text"
                  value={accordionTitleValue}
                  onChange={(e) => handleTableTitle(e)}
                />
              </AccordionSummary>

              <AccordionDetails>
                <Box sx={{ display: "flex", gap: "10px" }}>
                  <TextField
                    label="Input 1"
                    value={table.data.input1}
                    onChange={(e) =>
                      handleInputChange(index, "input1", e.target.value)
                    }
                  />
                  <TextField
                    label="Input 2"
                    value={table.data.input2}
                    onChange={(e) =>
                      handleInputChange(index, "input2", e.target.value)
                    }
                  />
                </Box>
              </AccordionDetails>
            </Accordion>
          ))} */}

          <div>
            <Button onClick={handleAddAccordion}>Create Table</Button>
            {accordions.map((accordion, index) => (
              <Accordion key={index} defaultExpanded="true">
                <AccordionSummary>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      width: "100%",
                    }}
                  >
                    <input
                      type="text"
                      value={accordion.title}
                      onChange={(e) => {
                        const updatedAccordions = [...accordions];
                        updatedAccordions[index].title = e.target.value;
                        setAccordions(updatedAccordions);
                      }}
                      style={{
                        outline: "none",
                        padding: "5px",
                      }}
                    />
                    <Button
                      onClick={() => handleRemoveAccordion(index)}
                      color="error"
                    >
                      Delete
                    </Button>
                  </Box>
                </AccordionSummary>
                <AccordionDetails>
                  <div>
                    {accordion.columns.map((column, colIndex) => (
                      <div key={colIndex}>
                        <Box
                          sx={{
                            display: "flex",
                            gap: "10px",
                          }}
                        >
                          <TextField
                            // label="Column Title"
                            value={column.title}
                            onChange={(e) => {
                              const updatedAccordions = [...accordions];
                              updatedAccordions[index].columns[colIndex].title =
                                e.target.value;
                              setAccordions(updatedAccordions);
                            }}
                          />
                          <TextField
                            // label="Column Type"
                            value={column.type}
                            onChange={(e) => {
                              const updatedAccordions = [...accordions];
                              updatedAccordions[index].columns[colIndex].type =
                                e.target.value;
                              setAccordions(updatedAccordions);
                            }}
                          />
                        </Box>

                        <Box
                          sx={{
                            mt: 2,
                          }}
                        >
                          <Button
                            onClick={() => handleRemoveColumn(index, colIndex)}
                            color="error"
                          >
                            Remove
                          </Button>
                        </Box>
                      </div>
                    ))}
                    <Box sx={{ textAlign: "end", mt: 3 }}>
                      <Button
                        variant="contained"
                        onClick={() => handleAddColumn(index)}
                      >
                        Add Column
                      </Button>
                    </Box>
                  </div>
                </AccordionDetails>
              </Accordion>
            ))}
          </div>
        </Box>

        <Box sx={{}}>
          <IconButton
            sx={{ color: "black" }}
            onClick={() => setOpenDrawer(!openDrawer)}
          >
            <Menu sx={{ color: "black" }} />
          </IconButton>
        </Box>
      </Box>
    </React.Fragment>
  );
}
