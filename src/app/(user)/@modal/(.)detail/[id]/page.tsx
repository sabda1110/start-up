import Modal from '@/components/User/core/modal/Modal';

import React from 'react';

const ModalPage = (props: any) => {
  const { params } = props;
  return (
    <Modal>
      <div className=" absolute  text-center z-50 left-0 right-0 top-40">
        <h2 className="text-[2rem] font-semibold text-[#242424]">Article</h2>
        <p className=" mt-20 px-10 text-[#242424] font-normal">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi deleniti illo nulla, quia
          sit sequi veritatis. Natus ullam animi reprehenderit accusantium illo. Molestiae quis
          doloribus corporis ab et, dolor at asperiores debitis. Numquam praesentium quasi corrupti
          dolorum doloremque officiis totam ad voluptatum minus, consectetur, tenetur rerum. Sint
          pariatur placeat itaque?
        </p>
      </div>
    </Modal>
  );
};

export default ModalPage;
