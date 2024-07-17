import User from "../models/user.js";
import Project from "../models/project.js";
import jwt from 'jsonwebtoken'

//@desc Get all projects
//@route GET /projects
//access Private
export const getAllProjects = async (req, res, next) => {
  try {
    const projects = await Project.find();

    res.status(200).json({ success: true, data: projects });
  } catch (err) {
    console.log(err);
  }
};

//@desc GET single project
//@route GET /feed/:id
//access Private
export const getSingleProject = async (req, res, next) => {
  try {
    console.log(req.params.projectId)
    const project = await Project.findById(req.params.projectId);
    if (!project) {
     console.log('proje yok')
    }
    console.log(project)
    res.status(200).json({ success: true, data: project });
  } catch (err) {
    console.log(err);
  }
};

//@desc POST single project
//@route POST /feed/:id
//access Private
export const createProject = async (req, res, next) => {
  try {
    const {
      creator,
      title,
      date,
      duration,
      description,
      teamSize,
      languages,
      roles,
      openRoles,
    } = req.body;

    const project = new Project({
      creator,
      title,
      date,
      duration,
      description,
      teamSize,
      languages,
      roles,
      openRoles,
    });

    await project.save();
    res.status(200).json({ success: true, data: project });
  } catch (err) {
    console.error(err);
  }
};

//@desc POST project match
//@route POST /feed/project-matching
//access Private
export const projectMatching = async (req, res, next) => {
  try {
    const token = req.body.token;

    jwt.verify(token, "somesupersecretsecret", async (err, decoded) => {
      if (err) {
        return res.status(401).json({ error: "Invalid token" });
      }

      const userEmail = decoded.email;

      const user = await User.findOne({ email: userEmail });

      const wantedRole = req.body.wantedRole;

      const allProjects = await Project.find();

      const matchingProjects = allProjects.filter((project) => {
        return project.openRoles.includes(wantedRole);
      });
      

      if (user.projects.length >= 1) {
        console.log('Sadece 1 projeye eşlenebilirsiniz.')
        return res.status(400).json({ message:'false', error: "User cannot be added to more than two projects." });

      }

      if (matchingProjects.length > 0) {
  

        let firstMatchingProject = matchingProjects[0];

        console.log('bir', user.projects)
   
          
        const projectInUser = {
          project: firstMatchingProject._id,
          selectedRoles: [wantedRole]
        };

        // VERSİYON 2'DE BİRDEN FAZLA PROJEYE EŞLENME ÖZELLİĞİ GELİRSE KULLANILACAK.
        // const projectIdsInUser = user.projects.map(existingProject => existingProject.project._id).toString();
        // const projectInUserToString = projectInUser.project.toString()

        // console.log(projectIdsInUser.includes(projectInUserToString))
        // if (projectIdsInUser.includes(projectInUserToString)) {
        //   console.log('Bu projeye zaten eklenmişsiniz.');
        //   firstMatchingProject = matchingProjects[1];
        // }
        
        user.projects.push(projectInUser);
        console.log('burda1')
  
        await user.save();


        const userRolesInProject = {
          user: user._id,
          selectedRoles: [wantedRole], 
        };
        console.log(firstMatchingProject)
        firstMatchingProject.members.push(userRolesInProject);

        firstMatchingProject.openRoles = firstMatchingProject.openRoles.filter(role => role !== wantedRole);

      
        await firstMatchingProject.save();

        res.status(200).json({ matchingProjects });
      } else {
        res.status(404).json({ message: "Eşleşen proje bulunamadı." });
      }
    });

  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

//@desc POST delete project match request
//@route POST /feed/:projectId
//access Private
export const deleteProjectRequest = async (req, res, next) => {
  try {
    const token = req.body.token;
    const projectId = req.params.projectId;
    const role = req.body.role;

    jwt.verify(token, "somesupersecretsecret", async (err, decoded) => {
      if (err) {
        return res.status(401).json({ error: "Geçersiz token" });
      }

      const userEmail = decoded.email;
      const user = await User.findOne({ email: userEmail });

      const project = await Project.findById(projectId);

      // Projeden belirli bir kullanıcıyı çıkart
      project.members = project.members.filter(member => member.user.toString() !== user._id.toString());
      project.openRoles.push(role)
      // Proje verilerini güncelle
      await project.save();

      // Kullanıcının projelerinden belirli bir projeyi çıkart
      user.projects = user.projects.filter(proj => proj.project.toString() !== projectId);

      // Kullanıcıyı güncelle
      await user.save();

      res.status(200).json({ message: 'Başarılı' });
    });

  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'İç Sunucu Hatası' });
  }
}