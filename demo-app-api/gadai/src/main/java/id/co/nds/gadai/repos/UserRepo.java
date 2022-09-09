package id.co.nds.gadai.repos;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import id.co.nds.gadai.entities.UserEntity;
import id.co.nds.gadai.globals.GlobalConstant;

@Repository
@Transactional
public interface UserRepo extends JpaRepository<UserEntity, String>, JpaSpecificationExecutor<UserEntity> {
    @Modifying
    @Query(value = "UPDATE users SET rec_status = '"
            + GlobalConstant.REC_STATUS_NON_ACTIVE
            + "', deleter_id = ?2 , deleted_date = NOW() "
            + "WHERE user_id = ?1", nativeQuery = true)
    Integer doDelete(String id, Integer deleterId);
}
