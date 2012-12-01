var moveSpeed = 5.0;
var turnSpeed = 45.0;

function Update() {
  if (Input.GetButton('MoveForward'))
    transform.position += transform.forward * moveSpeed * Time.deltaTime;

  if (Input.GetButton('MoveBackward'))
    transform.position -= transform.forward * moveSpeed * Time.deltaTime;

  if (Input.GetButton('MoveLeft'))
    transform.eulerAngles.y -= turnSpeed * Time.deltaTime;

  if (Input.GetButton('MoveRight'))
    transform.eulerAngles.y += turnSpeed * Time.deltaTime;
}