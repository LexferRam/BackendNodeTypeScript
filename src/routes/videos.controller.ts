import { RequestHandler } from "express";
import Video from "./Video";

export const getVideos: RequestHandler = async (req, res) => {
  try {
    const videos = await Video.find();
    return res.json(videos);
  } catch (error) {
    console.log(error);
  }
};

export const createVideos: RequestHandler = async (req, res) => {
  const videoFound = await Video.findOne({ url: req.body.url });
  if (videoFound)
    return res.status(301).json({ message: "The url already exists" });

  const video = new Video(req.body);
  const savedVideo = await video.save();
  res.json(savedVideo);
};

export const getVideo: RequestHandler = async (req, res) => {
  const videoFound = await Video.findById(req.params.id);
  if (!videoFound) return res.status(204).json();
  return res.json(videoFound);
};

export const deleteVideos: RequestHandler = async (req, res) => {
  const videoFound = await Video.findByIdAndDelete(req.params.id);
  if (!videoFound) return res.status(204).json();
  return res.json(videoFound);
};

export const updateVideos: RequestHandler = async (req, res) => {
  /*En la variable 'videoUpdated' se retorna el objeto anterior
  (el que fue actualizdo), con el parametro {new:true} se retorna el dato 
  actualizado
  */
  const videoUpdated = await Video.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  if (!videoUpdated) return res.status(204).json();
  res.json(videoUpdated);
};
