import asyncHandler from 'express-async-handler'
import Project from '../models/projectModel.js'

// @desc    Fetch all projects
// @route   GET /api/projects
// @access  Public
const getProjects = asyncHandler(async (req, res) => {
  const pageSize = 10
  const page = Number(req.query.pageNumber) || 1

  const keyword = req.query.keyword
    ? {
        name: {
          $regex: req.query.keyword,
          $options: 'i',
        },
      }
    : {}

  const count = await Project.countDocuments({ ...keyword })
  const projects = await Project.find({ ...keyword })
    .limit(pageSize)
    .skip(pageSize * (page - 1))

  res.json({ projects, page, pages: Math.ceil(count / pageSize) })
})


export {
  getProjects,
}
