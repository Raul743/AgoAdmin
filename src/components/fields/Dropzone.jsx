import React from "react";
// javascript plugin that creates nice dropzones for files
import Dropzone from "dropzone";
// reactstrap components

Dropzone.autoDiscover = false;

export const IssDropzone = props => {
    //const [reactQuillText, setReactQuillText] = useState("");
    /*
  switch (props.type) {
    case "dropzone-single":
      useEffect(() => {
        // this variable is to delete the previous image from the dropzone state
        // it is just to make the HTML DOM a bit better, and keep it light
        let currentSingleFile = undefined;
        // single dropzone file - accepts only images
        new Dropzone(document.getElementById("dropzone-single"), {
          url: "/",
          thumbnailWidth: null,
          thumbnailHeight: null,
          previewsContainer: document.getElementsByClassName(
            "dz-preview-single"
          )[0],
          previewTemplate: document.getElementsByClassName(
            "dz-preview-single"
          )[0].innerHTML,
          maxFiles: 1,
          acceptedFiles: "image/*",
          init: function() {
            this.on("addedfile", function(file) {
              if (currentSingleFile) {
                this.removeFile(currentSingleFile);
              }
              currentSingleFile = file;
            });
          }
        });
        document.getElementsByClassName("dz-preview-single")[0].innerHTML = "";
      });

      return (
        <>
          <label className="form-control-label">{props.title}</label>
          <div className="dropzone dropzone-single mb-3" id="dropzone-single">
            <div className="fallback">
              <div className="custom-file">
                <input
                  className="custom-file-input"
                  id="projectCoverUploads"
                  type="file"
                />
                <label
                  className="custom-file-label"
                  htmlFor="projectCoverUploads"
                >
                  Choose file
                </label>
              </div>
            </div>
            <div className="dz-preview dz-preview-single">
              <div className="dz-preview-cover">
                <img
                  alt="..."
                  className="dz-preview-img"
                  data-dz-thumbnail=""
                />
              </div>
            </div>
          </div>
        </>
      );
      break;

    case "dropzone-multiple":
      useEffect(() => {
        // this variable is to delete the previous image from the dropzone state
        // it is just to make the HTML DOM a bit better, and keep it light
        let currentMultipleFile = undefined;
        // multiple dropzone file - accepts any type of file
        new Dropzone(document.getElementById("dropzone-multiple"), {
          url: "https://",
          thumbnailWidth: null,
          thumbnailHeight: null,
          previewsContainer: document.getElementsByClassName(
            "dz-preview-multiple"
          )[0],
          previewTemplate: document.getElementsByClassName(
            "dz-preview-multiple"
          )[0].innerHTML,
          maxFiles: null,
          acceptedFiles: null,
          init: function() {
            this.on("addedfile", function(file) {
              if (currentMultipleFile) {
              }
              currentMultipleFile = file;
            });
          }
        });
        document.getElementsByClassName("dz-preview-multiple")[0].innerHTML =
          "";
      });

      return (
        <>
          <label className="form-control-label">{props.title}</label>
          <div className="dropzone dropzone-multiple" id="dropzone-multiple">
            <div className="fallback">
              <div className="custom-file">
                <input
                  className="custom-file-input"
                  id="customFileUploadMultiple"
                  multiple="multiple"
                  type="file"
                />
                <label
                  className="custom-file-label"
                  htmlFor="customFileUploadMultiple"
                >
                  Choose file
                </label>
              </div>
            </div>
            <ListGroup
              className=" dz-preview dz-preview-multiple list-group-lg"
              flush
            >
              <ListGroupItem className=" px-0">
                <Row className=" align-items-center">
                  <Col className=" col-auto">
                    <div className=" avatar">
                      <img
                        alt="..."
                        className=" avatar-img rounded"
                        data-dz-thumbnail
                        src="..."
                      />
                    </div>
                  </Col>
                  <div className=" col ml--3">
                    <h4 className=" mb-1" data-dz-name>
                      ...
                    </h4>
                    <p className=" small text-muted mb-0" data-dz-size>
                      ...
                    </p>
                  </div>
                  <Col className=" col-auto">
                    <Button size="sm" color="danger" data-dz-remove>
                      <i className="fas fa-trash" />
                    </Button>
                  </Col>
                </Row>
              </ListGroupItem>
            </ListGroup>
          </div>
        </>
      );
      break;
  }*/
    return <></>;
};

export default IssDropzone;
