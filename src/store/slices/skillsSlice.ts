import { createEntityAdapter, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ISkills, Skill } from "../../types/skills";
import { skills } from "./data/skills";




const skillsSlice = createSlice({
    name: "skills",
    initialState : skills,
    reducers: {
    }
})

export default skillsSlice